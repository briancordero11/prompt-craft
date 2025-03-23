"use client";

import { useEffect } from "react";

export function ClientEffects() {
  useEffect(() => {
    document.documentElement.classList.add("js-focus-visible");
    document.documentElement.setAttribute("data-js-focus-visible", "");
  }, []);

  return null; // This component only runs effects and doesn't render anything
}
