"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // useEffect fires after React commits the new page DOM, but a one-frame
    // delay ensures the browser has laid out the new elements before the
    // IntersectionObserver measures their positions.
    const id = requestAnimationFrame(() => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
