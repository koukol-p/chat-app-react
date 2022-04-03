import socketio from "socket.io-client";

import { createContext } from "react";

export const socket = socketio.connect("http://localhost:5000");
export const SocketContext = createContext();
