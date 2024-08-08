import { useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Message } from "./message";
import { GetRoomMessages } from "../http/get-room-messages";

export function Messages() {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error("Messages components must be used within room page");
  }

  const { data } = useSuspenseQuery({
    queryKey: ["messages", roomId],
    queryFn: () => GetRoomMessages({ roomId }),
  });

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {data.messages.map((message) => (
        <Message
          key={message.id}
          text={message.text}
          reactionsCount={message.reactionsCount}
          answered={message.answered}
        />
      ))}
    </ol>
  );
}
