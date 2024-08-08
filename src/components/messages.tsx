import { useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Message } from "./message";
import { GetRoomMessages } from "../http/get-room-messages";
import { useMessagesWebSockets } from "../hooks/use-messages-web-sockets";

export function Messages() {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error("Messages components must be used within room page");
  }

  const { data } = useSuspenseQuery({
    queryKey: ["messages", roomId],
    queryFn: () => GetRoomMessages({ roomId }),
  });

  useMessagesWebSockets({ roomId });

  const sortedMessages = data.messages.sort((a, b) => {
    return b.reactionsCount - a.reactionsCount
  })

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {sortedMessages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          text={message.text}
          reactionsCount={message.reactionsCount}
          answered={message.answered}
        />
      ))}
    </ol>
  );
}
