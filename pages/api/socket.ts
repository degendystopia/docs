import { Server } from 'socket.io'
import addWhitelistHandler from './whitelist'

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
            addWhitelistHandler(socket)
        })
    }
    res.end()
}

export default SocketHandler
