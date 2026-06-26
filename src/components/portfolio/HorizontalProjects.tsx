import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import { Reveal } from "./Reveal";

const PROJECTS = [
  { n: "01", title: "noir.dash", desc: "analytics dashboard for indie creators", stack: "react · ts · d3", year: "2026", img: p1 },
  { n: "02", title: "halo.mobile", desc: "minimal camera companion app", stack: "expo · reanimated", year: "2025", img: p2 },
  { n: "03", title: "fluid.studio", desc: "3d generative product visualizer", stack: "three · gsap", year: "2025", img: p3 },
  { n: "04", title: "syntax.notes", desc: "ai-assisted code note-taking", stack: "next · openai", year: "2025", img: p4 },
  { n: "05", title: "cocie.press", desc: "editorial agency landing site", stack: "astro · gsap", year: "2024", img: p5 },
];

export function HorizontalProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  // 5 cards, translate just enough to show last one
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-82%"]);

  return (
    <section ref={targetRef} id="work" className="relative h-[500vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="flex items-end justify-between px-6 pt-16 pb-10 md:px-12">
          <Reveal className="text-xs tracking-[0.4em] uppercase text-gold">
            — selected work
          </Reveal>
          <Reveal className="hidden text-[10px] tracking-[0.3em] uppercase text-muted-foreground md:block">
            scroll → horizontal
          </Reveal>
        </div>

        <div className="relative flex flex-1 items-center">
          <motion.div style={{ x }} className="flex gap-8 pl-6 md:gap-12 md:pl-12 will-change-transform">
            {PROJECTS.map((p, i) => (
              <article
                key={p.n}
                className="group relative flex h-[70vh] w-[85vw] shrink-0 flex-col overflow-hidden rounded-sm border border-gold/10 bg-card md:w-[60vw] lg:w-[44vw]"
              >
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/30" />
                  <div className="absolute left-5 top-5 text-[10px] tracking-[0.3em] uppercase text-gold">
                    {p.n} / {String(PROJECTS.length).padStart(2, "0")}
                  </div>
                  <div className="absolute right-5 top-5 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {p.year}
                  </div>
                </div>
                <div className="flex items-end justify-between gap-6 p-6 md:p-8">
                  <div>
                    <h3 className="font-display text-3xl font-light lowercase tracking-tight md:text-5xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="hidden text-right text-[10px] tracking-[0.3em] uppercase text-muted-foreground md:block">
                    {p.stack}
                  </div>
                </div>
              </article>
            ))}
            <div className="flex w-[40vw] shrink-0 items-center justify-center text-center text-muted-foreground">
              <div>
                <div className="font-display text-4xl font-extralight text-gold lowercase">end.</div>
                <div className="mt-2 text-[10px] tracking-[0.3em] uppercase">keep scrolling</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
