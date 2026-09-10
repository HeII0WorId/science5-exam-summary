"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="กลับขึ้นด้านบน"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-600 bg-white border border-stone-200 rounded-md shadow-sm hover:text-stone-900 hover:border-stone-300 transition-colors cursor-pointer"
    >
      <ArrowUp className="w-3.5 h-3.5" />
      <span>กลับขึ้นด้านบน</span>
    </button>
  );
}
