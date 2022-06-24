import express from "express";
const app = express();
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});
io.on("connection", (socket) => {
	console.log(`user connected: ${socket.id}`);
	socket.on("join_room", ({ username, room }) => {
		socket.join(room);
		console.log(`${username} joined ${room}`);
	});

	socket.on("disconnect", () => {
		console.log(`user disconnected: ${socket.id}`);
	});
});

server.listen(5000, () => {
	console.log("Server is running on port 5000");
});
