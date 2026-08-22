import { useCallback, useEffect, useState } from "react";
import { applyTheme, getStoredTheme, persistTheme, type Theme } from "../theme";

function readDomTheme(): Theme {
  const current = document.documentElement.dataset.theme;
  return current === "light" || current === "dark" ? current : getStoredTheme();
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readDomTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      applyTheme(next);
      persistTheme(next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
