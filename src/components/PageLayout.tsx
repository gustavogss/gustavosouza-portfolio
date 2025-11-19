import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  centered?: boolean;
}

export function PageLayout({
  children,
  title,
  description,
  centered = false,
}: PageLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    if (containerRef.current) {
      const sections =
        containerRef.current.querySelectorAll(".animate-section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef} className="min-h-screen px-4 sm:px-6 lg:px-12 pt-1">
      <div
        ref={headerRef}
        className={`mb-10 sm:mb-14 ${centered ? "text-center" : "text-left"}`}
      >
        <h1
          className="
            font-bold text-foreground mb-2            
            text-4xl sm:text-5xl lg:text-6xl
            leading-tight
          "
        >
          {title}
        </h1>

        {description && (
          <p
            className="
              text-base sm:text-lg md:text-xl
              text-muted-foreground
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            {description}
          </p>
        )}
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}
