import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: onLoadingComplete,
        });
      },
    });

    tl.fromTo(
      imageRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
    )
      .fromTo(
        nameRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .to({}, { duration: 0.8 });
  }, [onLoadingComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center space-y-6">
        <img
          ref={imageRef}
          src="https://github.com/gustavogss.png"
          alt="Gustavo Souza"
          className="w-32 h-32 rounded-full border-4 border-primary"
        />
        <div className="text-center space-y-2">
          <h1 ref={nameRef} className="text-4xl font-bold text-foreground">
            Gustavo Souza
          </h1>
          <p ref={titleRef} className="text-xl text-muted-foreground">
            Full Stack Developer | DevSecOps
          </p>
        </div>
      </div>
    </div>
  );
}
