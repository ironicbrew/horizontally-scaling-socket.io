## How to use

```
// git clone
npm i
```

Spin up a redis server and fill in the missing environment variables in nodemon.json using your redis server's information

```
npm start
```

## That's a lot of console.logs.... What is happening?

This repo simulates 2 web clients and 2 node servers

Client 1 is connected to server 1
Client 2 is connected to server 2
Server 1 and 2 are connected to eachother through a redis server

```
         ----- Server 1 ---- Client 1
        |      
Redis --
        |
         ----- Server 2 ---- Client 1
```

This way events sent Server 1 --> Client 1 are also sent Server 1 --> Redis Server --> Server 2 --> Client 2

You can spin up as many Servers as you like they will all be connected through the Redis server and emit events as if they are one single server.