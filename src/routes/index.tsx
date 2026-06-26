import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { CursorTrail } from "@/components/portfolio/CursorTrail";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { HorizontalProjects } from "@/components/portfolio/HorizontalProjects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raajj — Developer & Designer Portfolio" },
      {
        name: "description",
        content:
          "Raajj — B.Tech 2nd-year student, frontend developer and designer crafting motion-rich, editorial web experiences.",
      },
      { property: "og:title", content: "Raajj — Developer & Designer Portfolio" },
      {
        property: "og:description",
        content:
          "Selected work, stack, and contact for Raajj — frontend developer and designer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <CursorTrail />
      <main className="grain relative bg-background text-foreground">
        <Hero />
        <About />
        <Skills />
        <HorizontalProjects />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
