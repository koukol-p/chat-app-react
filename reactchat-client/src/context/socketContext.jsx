import { createContext } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    const socket = io("http://localhost:5000", { autoConnect: false });
    
    return(
    <SocketContext.Provider value={socket}>
        {children}
    </SocketContext.Provider>
    )
}