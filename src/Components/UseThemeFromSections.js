import { useEffect, useState } from "react";

export default function useThemeFromSections() {
  const [theme, setTheme] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newTheme = entry.target.getAttribute("data-theme");
            setTheme(newTheme);
          }
        });
      },
      { threshold: 0.5 } // 50% visible counts as "active"
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return theme;
}

