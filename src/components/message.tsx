import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface MessageProps {
  answered?: boolean;
  reactionsCount: number;
  text: string;
}
export function Message({
  answered = false,
  reactionsCount,
  text,
}: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false);

  function handleTangleReaction() {
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
        className={`mt-3 flex items-center gap-2 text-sm font-medium ${ hasReacted ? "text-orange-400 hover:text-orange-500" : "text-zinc-400 text-sm hover:text-zinc-300" }`}
      >
        <ArrowUp className="size-4" />
        Curtir pergunta ({reactionsCount})
      </button>
    </li>
  );
}
