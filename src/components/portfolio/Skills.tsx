import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const ROWS = [
  ["react", "typescript", "next.js", "tailwind", "framer motion", "node", "python", "c++"],
  ["figma", "three.js", "postgres", "prisma", "git", "vite", "supabase", "lenis"],
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold/15 py-6">
      <motion.div
        className="flex shrink-0 gap-10 whitespace-nowrap font-display text-3xl font-extralight tracking-tight lowercase md:text-6xl"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 text-foreground/70 transition-colors hover:text-gold"
          >
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mb-12 px-6 md:px-12">
        <Reveal className="text-xs tracking-[0.4em] uppercase text-gold">— stack</Reveal>
      </div>
      <div className="space-y-4">
        <Row items={ROWS[0]} />
        <Row items={ROWS[1]} reverse />
      </div>
    </section>
  );
}
