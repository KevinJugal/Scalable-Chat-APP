import { Server, Socket} from "socket.io";
import Redis from "ioredis";

const pub = new Redis({
    host : 'caching-384d5d0-jugal-chat.h.aivencloud.com',
    port : 27526,
    username : 'default',
    password : 'AVNS_E2u2IkdzYAvaTwT_lIC'
});
const sub = new Redis({
    host : 'caching-384d5d0-jugal-chat.h.aivencloud.com',
    port : 27526,
    username : 'default',
    password : 'AVNS_E2u2IkdzYAvaTwT_lIC'
});

class SocketService{
    private _io : Server;
    constructor(){
        console.log("INIT SOCKET SERVICE....");
        this._io = new Server({
            cors : {
                allowedHeaders : ['*'],
                origin : "*",
            },
        });
        sub.subscribe("MESSAGES");
    }

    get io(){
        return this._io;
    }

    public initListeners(){
        const io = this._io;
        console.log("Init socket listeners...");
        io.on('connect', (socket) => {
            console.log(`New socket Connected`, socket.id);

            socket.on('event:message', async ({message} : {message:String}) => {
                console.log(`New message recieved.`, message); 
                await pub.publish('MESSAGES', JSON.stringify({message}));
            });
        });
        sub.on('message', (channel:string, message: string) => {
            if(channel==='MESSAGES'){
                console.log('new message from redis', message);
                io.emit("message", message);
                
            }
        });
    }
}

export default SocketService;