import {io} from "socket.io-client"

export default class Client {

    socket;
    clientName;

    constructor({host, clientName}) {
        this.clientName = clientName;
        this.socket = io(host, {transports: ["websocket"]})
        this.listenForPayloads()
    }

    listenForPayloads() {
        this.socket.onAny((eventName, payload) => {
            console.log(`${eventName} --> ${this.clientName}`);
        })
    }

}