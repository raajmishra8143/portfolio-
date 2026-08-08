import { motion } from "framer-motion";
import { Reveal, WordReveal } from "./Reveal";

const SOCIALS = [
  { label: "github", href: "https://github.com/raajmishra8143" },
  { label: "linkedin", href: "https://www.linkedin.com/in/raj-mishra-b905a9371" },
  { label: "twitter", href: "https://twitter.com" },
  { label: "instagram", href: "https://instagram.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 md:px-12 md:py-48">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[160px]" />

      <Reveal className="mb-12 text-xs tracking-[0.4em] uppercase text-gold">
        — contact
      </Reveal>

      <h2 className="font-display text-[clamp(3rem,12vw,11rem)] font-extralight leading-[0.9] tracking-[-0.05em] lowercase">
        <WordReveal text="let's make" />
        <br />
        <span className="italic text-gold">
          <WordReveal text="something good." />
        </span>
      </h2>

      <Reveal delay={0.3} className="mt-16">
        <a
          href="mailto:rajmishra8143@gmail.com"
          
          className="group inline-flex items-center gap-4 text-2xl md:text-4xl"
        >
          <span className="font-display font-light lowercase tracking-tight">
            rajmishra8143@gmail.com
          </span>
          <motion.span
            className="text-gold"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↗
          </motion.span>
        </a>
      </Reveal>

      <div className="mt-20 grid gap-8 border-t border-gold/15 pt-10 md:grid-cols-2">
        <Reveal>
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            elsewhere
          </div>
          <div className="mt-4 flex flex-wrap gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group relative font-display text-lg lowercase text-foreground/80 transition-colors hover:text-gold"
              >
                {s.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            availability
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-sm text-foreground/80">
              open for freelance — q1 2026
            </span>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 flex items-end justify-between text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <span>Raj Mishra — portfolio © 2026</span>
        <span className="text-gold">crafted with care</span>
      </div>
    </section>
  );
}
