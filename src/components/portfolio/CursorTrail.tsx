import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";

const POOL = [p1, p2, p3, p4, p5];

type TrailItem = { id: number; x: number; y: number; src: string };

export function CursorTrail() {
  const [items, setItems] = useState<TrailItem[]>([]);
  const idRef = useRef(0);
  const lastRef = useRef({ x: 0, y: 0, t: 0 });
  const poolIdxRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const dx = e.clientX - lastRef.current.x;
      const dy = e.clientY - lastRef.current.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 80 && now - lastRef.current.t < 120) return;
      lastRef.current = { x: e.clientX, y: e.clientY, t: now };

      const src = POOL[poolIdxRef.current % POOL.length];
      poolIdxRef.current += 1;
      const id = ++idRef.current;
      setItems((prev) => [...prev.slice(-6), { id, x: e.clientX, y: e.clientY, src }]);
      window.setTimeout(() => {
        setItems((prev) => prev.filter((i) => i.id !== id));
      }, 800);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {items.map((it) => (
          <motion.img
            key={it.id}
            src={it.src}
            alt=""
            initial={{ opacity: 0, scale: 0.6, x: it.x - 110, y: it.y - 75 }}
            animate={{ opacity: 0.95, scale: 1, x: it.x - 110, y: it.y - 75 }}
            exit={{ opacity: 0, scale: 1.05, y: it.y - 95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute h-[150px] w-[220px] rounded-md object-cover shadow-2xl ring-1 ring-gold/20"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
