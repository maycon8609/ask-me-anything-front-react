import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { toast } from "sonner";

import { createMessageReaction } from "../http/create-message-reaction";
import { removeMessageReaction } from "../http/remove-message-reaction";

interface MessageProps {
  id: string;
  answered?: boolean;
  reactionsCount: number;
  text: string;
}
export function Message({
  id: messageId,
  answered = false,
  reactionsCount,
  text,
}: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false);
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error("Messages components must be used within room page");
  }

  function handleTangleReaction() {
    if (!roomId) return;

    try {
      if (hasReacted) {
        removeMessageReaction({ roomId, messageId });
      } else {
        createMessageReaction({ roomId, messageId });
      }
    } catch {
      toast.error("Falha ao reagir a mensagem, tente novamente!");
    }

    setHasReacted((oldState) => !oldState);
  }

  return (
    <li
      data-answered={answered}
      className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none"
    >
      {text}

      <button
        type="button"
        onClick={handleTangleReaction}
        className={`mt-3 flex items-center gap-2 text-sm font-medium ${
          hasReacted
            ? "text-orange-400 hover:text-orange-500"
            : "text-zinc-400 text-sm hover:text-zinc-300"
        }`}
      >
        <ArrowUp className="size-4" />
        Curtir pergunta ({reactionsCount})
      </button>
    </li>
  );
}
