"use client";
import { useEffect } from "react";

export default function HomeInteractive() {
  useEffect(() => {
    function countUp(el: Element, target: number, duration: number) {
      const text = el.textContent ?? "";
      const isPercent = text.includes("%");
      const isPlus = text.includes("+");
      let current = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent =
          Math.floor(current) + (isPlus ? "+" : "") + (isPercent ? "%" : "");
        if (current >= target) clearInterval(timer);
      }, 16);
    }

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".hero-stat-num").forEach((num) => {
              const raw = parseInt((num.textContent ?? "").replace(/[^0-9]/g, ""), 10);
              if (!isNaN(raw)) countUp(num, raw, 900);
            });
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsGrid = document.querySelector(".hero-stats");
    if (statsGrid) statObserver.observe(statsGrid);
    return () => statObserver.disconnect();
  }, []);

  return null;
}
