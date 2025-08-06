"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { m } from "motion/react"; // ✅ Use `m` instead of `motion`
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";


export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ChanhDaiMarkMotion /> : <ChanhDaiMark />;
}

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const distanceRef = useRef(160);

  // Track scroll to toggle visibility
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  // Detect dark mode using <html class="dark">
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme(); // Initial check

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Observe #js-cover-mark distance
  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <m.div
      initial={{ opacity: 0, transform: "translateY(8px)" }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={isDark ? "/vu-logo-dark.png" : "/vu-logo-light.png"}
        alt="VU Logo"
        height={1000}
        width={1000}
        className="h-24 w-auto"
      />
    </m.div>
  );
}

function ChanhDaiMark() {
  const [isDark, setIsDark] = useState(false);
  const distanceRef = useRef(160);

  // Detect dark mode using <html class="dark">
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme(); // Initial check

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Observe #js-cover-mark distance
  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
    >
      <Image
        src={isDark ? "/vu-logo-dark.png" : "/vu-logo-light.png"}
        alt="VU Logo"
        height={1000}
        width={1000}
        className="h-24 w-auto"
      />
    </div>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
