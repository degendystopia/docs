import { WhitelistData, WhitelistStorage } from 'pages/api/whitelist'
import { Server } from 'socket.io'

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
            const whitelist = async (data: WhitelistData, callback) => {
                if (!data.address) {
                    callback('No address provided')
                    return
                }
                // // must provide a social contact
                // if (!data.twitter && !data.discord && !data.telegram && !data.other) {
                //     callback('No social contact provided')
                //     return
                // }

                // store data in database
                let result = await whitelistStorage.insertToWhitelist(data)
                // if (!result) { DONT TELL EM SHIT
                //     result = 'submitted, good luck fren.'
                // }
                data.address = socket.client.conn.remoteAddress

                callback(result)
            }
            socket.on('whitelist', whitelist)

            socket.on('waitlist', async (data: WhitelistData, callback) => {
                data.waitlist = true
                whitelist(data, callback)
            })
        })
    }
    res.end()
}

export default SocketHandler
