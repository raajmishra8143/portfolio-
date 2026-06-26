import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/portrait.jpg";
import { Reveal, WordReveal } from "./Reveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="about" className="relative px-6 py-32 md:px-12 md:py-48">
      <Reveal className="mb-20 text-xs tracking-[0.4em] uppercase text-gold">
        — about
      </Reveal>

      <div className="grid items-start gap-12 md:grid-cols-12">
        <div className="relative md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <motion.img
              src={portrait}
              alt="Raajj"
              loading="lazy"
              style={{ y }}
              className="absolute inset-0 h-[120%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0" />
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            <span>raajj — 2026</span>
            <span className="text-gold">↗ ig</span>
          </div>
        </div>

        <div className="md:col-span-7 md:pl-12">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extralight leading-[1] tracking-[-0.03em] lowercase text-balance">
            <WordReveal text="i build quiet, careful interfaces — and sometimes loud ones." />
          </h2>

          <Reveal delay={0.2} className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              i'm raajj — a second-year b.tech student spending most of my nights inside a
              code editor. i care about typography, motion, and the small moments where a
              click feels like it snapped into place.
            </p>
            <p className="mt-4">
              currently learning systems, shipping side projects, and freelancing the
              occasional landing page.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gold/15 pt-8">
            {[
              { k: "year", v: "02 / 04" },
              { k: "focus", v: "frontend · motion" },
              { k: "based", v: "india" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={0.3 + i * 0.1}>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {s.k}
                </div>
                <div className="mt-2 font-display text-lg font-light text-foreground">
                  {s.v}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
