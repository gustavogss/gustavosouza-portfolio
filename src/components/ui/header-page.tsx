"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeaderPage({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    tl.from(titleRef.current, {
      y: -40,
      opacity: 0,
    });

    if (subtitleRef.current) {
      tl.from(
        subtitleRef.current,
        {
          y: -30,
          opacity: 0,
        },
        "-=0.4"
      );
    }
  }, []);

  return (
    <header className="text-center mb-10">
      {" "}
      {/* padding-top:16px */}
      <h1 ref={titleRef} className="text-5xl font-bold text-foreground mb-2">
        {title}
      </h1>
      {subtitle && (
        <p
          ref={subtitleRef}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
