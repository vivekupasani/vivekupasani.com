"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { BrandContextMenu } from "@/components/brand-context-menu";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    // Initial check
    setIsDark(document.documentElement.classList.contains("dark"));

    // Observe class changes on <html>
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <BrandContextMenu>
      <div
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        {isDark ? (
          <Image src="/vu-logo-dark.png" alt="logo" height={1000} width={1000} className="h-auto w-auto" />
        ) : (
          <Image src="/vu-logo-light.png" alt="logo" height={1000} width={1000} className="h-auto w-auto" />
        )}
      </div>
    </BrandContextMenu>
  );
}
