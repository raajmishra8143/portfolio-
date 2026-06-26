import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = ["developer", "designer", "builder", "btech '28"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-8 pb-10 md:px-12">
      {/* Top nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between text-xs tracking-[0.3em] uppercase text-muted-foreground"
      >
        <span className="text-gold">raajj / portfolio</span>
        <span className="hidden md:inline">est. 2024 — india</span>
        <span>©  2026</span>
      </motion.div>

      {/* Gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />

      {/* Center display */}
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-xs tracking-[0.4em] uppercase text-gold-soft"
        >
          ✦  portfolio of one  ✦
        </motion.div>

        <h1 className="font-display text-[clamp(5rem,22vw,18rem)] font-extralight leading-[0.85] tracking-[-0.05em] lowercase">
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
            >
              raajj
            </motion.span>
          </span>
        </h1>

        <div className="mt-6 flex h-8 items-center justify-center overflow-hidden text-lg md:text-2xl">
          <span className="mr-3 font-light text-muted-foreground">a</span>
          <div className="relative h-8 w-[260px] overflow-hidden text-left">
            {ROLES.map((r, i) => (
              <motion.span
                key={r}
                className="absolute inset-0 italic text-gold"
                initial={{ y: 40, opacity: 0 }}
                animate={{
                  y: i === idx ? 0 : i < idx ? -40 : 40,
                  opacity: i === idx ? 1 : 0,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {r}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative mt-10 overflow-hidden border-y border-gold/20 py-4">
        <motion.div
          className="flex shrink-0 gap-12 whitespace-nowrap text-sm tracking-[0.3em] uppercase text-muted-foreground"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "b.tech computer science",
              "✦",
              "frontend engineer",
              "✦",
              "ui/ux thinker",
              "✦",
              "open source",
              "✦",
              "based in india",
              "✦",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className={t === "✦" ? "text-gold" : ""}>
                {t}
              </span>
            )),
          )}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-24 left-6 hidden text-[10px] tracking-[0.4em] uppercase text-muted-foreground md:block"
      >
        <span className="block">scroll</span>
        <motion.span
          className="mt-2 block h-10 w-px bg-gold/50"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
