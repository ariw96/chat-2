import React from "react";

function Chat({ socket, username, room }) {
	return (
		<div>
			<div className="chat-header">
				<h3>Live Chat</h3>
			</div>
			<div className="chat-body"></div>
			<div className="chat-footer">
				<input type="text" placeholder="Type a message..." />
				<button>Send</button>
			</div>
		</div>
	);
}

export default Chat;
