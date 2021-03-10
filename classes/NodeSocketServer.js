import {Server} from "socket.io";
import http from "http";
import redisAdapter from "socket.io-redis";
import redis from "redis";

export default class NodeSocketServer {

    io;
    redisHost;
    redisPort;
    serverPort;
    serverName;

    constructor({redisHost, redisPort, redisPassword, serverPort, serverName}) {
        this.redisHost = redisHost;
        this.redisPort = redisPort;
        this.serverPort = serverPort;
        this.serverName = serverName;
        this.initServer(redisPassword);
        this.startSendingPayloads()
    }

    initServer(redisPassword) {
        const pubClient = redis.createClient(this.redisPort,this.redisHost, {auth_pass: redisPassword})
        const subClient = pubClient.duplicate();
        const server = http.createServer();
        this.io = new Server(server, {transports: ["websocket"]})
        this.io.adapter(redisAdapter({pubClient, subClient}));
        server.listen(this.serverPort, () => {
            console.log("Listening");
        })
    }

    startSendingPayloads() {
        setInterval(() => {
            this.io.emit(`${this.serverName}`)
        }, 3000)
    }

}