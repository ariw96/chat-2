import { useState } from "react";
import "./app.css";
import { io } from "socket.io-client";
import Chat from "./Chat";
const socket = io("http://localhost:5000");

function App() {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");
	const joinRoom = () => {
		if (username.length > 0 && room.length > 0) {
			socket.emit("join_room", { username, room });
		}
	};
	return (
		<div className="">
			<div className="">
				<h3>Join A Chat</h3>
				<input
					type="text"
					placeholder="John..."
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Room ID..."
					onChange={(e) => setRoom(e.target.value)}
				/>
				<button onClick={joinRoom}>Join</button>
				<Chat socket={socket} username={username} room={room} />
			</div>
		</div>
	);
}

export default App;
