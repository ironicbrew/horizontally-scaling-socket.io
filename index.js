import Client from "./classes/Client.js";
import Server from "./classes/NodeSocketServer.js";

// Client 1 connected to Server 1
new Client({host: "http://localhost:6001", clientName: "Client 1"});
new Server({
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  redisPassword: process.env.REDIS_PASSWORD,
  serverPort: 6001,
  serverName: "Server 1"
});

// Client 2 connected to Server 2
new Client({host: "http://localhost:6002", clientName: "Client 2"});new Server({
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    redisPassword: process.env.REDIS_PASSWORD,
    serverPort: 6002,
    serverName: "Server 2"
  });