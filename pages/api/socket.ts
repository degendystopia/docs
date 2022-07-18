import { WhitelistData, WhitelistStorage } from 'pages/server/whitelist'
import { Server } from 'Socket.IO'

const whitelistStorage = new WhitelistStorage()

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running', res)
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        io.on('connection', (socket) => {
            console.log('Socket is connected', socket.id)
            socket.on('disconnect', () => {
                console.log('Socket is disconnected', socket.id)
            })
            socket.on('whitelist', async (data: WhitelistData, callback) => {
                if (!data.address) {
                    callback('No address provided')
                    return
                }
                // must provide a social contact
                if (!data.twitter && !data.discord && !data.telegram && !data.other) {
                    callback('No social contact provided')
                    return
                }

                // store data in database
                let result = await whitelistStorage.insertToWhitelist(data)
                if (!result) {
                    result = 'submitted, good luck bro.'
                }

                callback(result)
            })
        })
    }
    res.end()
}

export default SocketHandler
