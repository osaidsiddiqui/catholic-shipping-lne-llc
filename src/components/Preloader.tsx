import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const title = "ROYAUME SHIPPING LINE";

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3200);
    const remove = setTimeout(onComplete, 3800);
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-navy transition-all duration-600 ${fadeOut ? "animate-fade-out-up pointer-events-none" : ""}`}>
      <div className="relative mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-primary-foreground/5 border border-gold/30 shadow-[0_0_60px_hsl(42_50%_54%_/0.18)] animate-pulse-glow overflow-hidden">
        <img src="/images/logo.png" alt="Royaume Shipping Line" className="h-full w-full object-contain p-5" />
        <div className="absolute inset-2 rounded-full border border-gold/25" />
      </div>
      <div className="w-64 h-1 bg-navy rounded-full overflow-hidden mb-6">
        <div className="h-full bg-gold animate-load-bar rounded-full" />
      </div>
      <div className="flex gap-0.5">
        {title.split("").map((char, i) => (
          <span
            key={i}
            className="text-gold font-cinzel text-lg tracking-widest"
            style={{ animation: `letter-fade 0.4s ease-out ${i * 0.08}s forwards`, opacity: 0 }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
