import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const useChatContext = () => {
  const context = useContext(ChatContext);

  return context;
};
