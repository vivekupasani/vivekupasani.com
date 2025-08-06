"use client";

import { useRef } from "react";


export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <>
      {/* <button
        className={cn(
          "text-muted-foreground transition-colors hover:text-foreground",
          className
        )}
        onClick={() => audioRef.current?.play()}
      >
        <Volume2Icon className="size-[0.6em]" />
        <span className="sr-only">Pronounce my name</span>
      </button>

      <Portal.Portal>
        <audio ref={audioRef} src={namePronunciationUrl} preload="auto" />
      </Portal.Portal> */}
    </>
  );
}
