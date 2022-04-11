import { useContext } from "react";
import { SocketContext } from "../context/socketContext";

export const useSocketContext = () => {
  const context = useContext(SocketContext);

  return context;
};
