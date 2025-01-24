"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_core_1 = require("./http.core");
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(http_core_1.http, {
    cors: { origin: "*" },
});
let interval;
function WebSocket(app) {
    io.on("connection", (socket) => {
        console.log(`[socket]: ${socket.id} is connected`);
        socket.on("disconnect", () => {
            // clearInterval(interval);
        });
    });
    app.set("socketIo", io);
    console.log("[socket]: SocketIO is initialized");
}
exports.default = WebSocket;
