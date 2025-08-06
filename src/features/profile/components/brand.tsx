'use client'
import { ArrowRightIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

export function Brand() {

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
    <Panel>
      <PanelHeader>
        <PanelTitle>Brand</PanelTitle>
      </PanelHeader>

      <BrandContextMenu>
        <div
          className={cn(
            "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
            "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
            "bg-zinc-950/0.75 dark:bg-white/0.75"
          )}
        >
          <div className="grid grid-cols-[2.5rem_1fr]">
            <div className="flex h-28 items-center justify-center border-r border-edge bg-background">
              <span className="rotate-270 font-mono text-sm text-muted-foreground select-none">
                Mark
              </span>
            </div>

            <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
              {isDark ? (
                <Image src="/vu-logo-dark.png" alt="logo" height={100} width={100} className="h-auto w-auto" />
              ) : (
                <Image src="/vu-logo-light.png" alt="logo" height={100} width={100} className="h-auto w-auto" />
              )}
            </div>

            <div className="flex h-28 items-center justify-center border-r border-edge bg-background">
              <span className="rotate-270 font-mono text-sm text-muted-foreground select-none">
                Logotype
              </span>
            </div>

            <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
              {isDark ? (
                <Image src="/vivekupasani-logo-dark.png" alt="logo" height={600} width={500} className="h-auto w-auto" />
              ) : (
                <Image src="/vivekupasani-logo-light.png" alt="logo" height={600} width={500} className="h-auto w-auto" />
              )}
            </div>
          </div>
        </div>
      </BrandContextMenu>

      <div className="flex h-12 items-center justify-center pb-px">
        <Button variant="default" asChild>
          <Link href="/blog/vivekupasani-brand">
            Vivek&apos;s Brand
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
