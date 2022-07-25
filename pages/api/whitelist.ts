import { WhitelistData, WhitelistStorage } from 'pages/api/whitelistStorage'
import { Socket } from 'socket.io'

const whitelistStorage = new WhitelistStorage()

const addWhitelistHandler = (socket: Socket) => {
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

    socket.on('whitelisted-count', async (callback) => {
        const currentWl = await whitelistStorage.getCurrentWhitelist()
        callback(currentWl.size)
    })

    socket.on('redeem-whitelist', async (callback) => {
        const currentWl = await whitelistStorage.getCurrentWhitelist()
        callback(currentWl.size)
    })
}

export default addWhitelistHandler
