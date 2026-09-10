"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

export interface NavTopic {
  id: string;
  label: string;
  shortLabel: string;
  pastelBgClass: string;
  activeClass: string;
}

export const TOPICS: NavTopic[] = [
  {
    id: "volcano",
    label: "01 ภูเขาไฟระเบิด",
    shortLabel: "🌋 ภูเขาไฟ",
    pastelBgClass: "bg-orange-50 text-orange-800 border-orange-200/70 hover:bg-orange-100",
    activeClass: "bg-orange-500 text-white border-orange-600 shadow-xs font-semibold",
  },
  {
    id: "earthquake",
    label: "02 แผ่นดินไหว",
    shortLabel: "📈 แผ่นดินไหว",
    pastelBgClass: "bg-amber-50 text-amber-800 border-amber-200/70 hover:bg-amber-100",
    activeClass: "bg-amber-600 text-white border-amber-700 shadow-xs font-semibold",
  },
  {
    id: "tsunami",
    label: "03 สึนามิ",
    shortLabel: "🌊 สึนามิ",
    pastelBgClass: "bg-sky-50 text-sky-800 border-sky-200/70 hover:bg-sky-100",
    activeClass: "bg-sky-600 text-white border-sky-700 shadow-xs font-semibold",
  },
  {
    id: "plate-boundaries",
    label: "04 รอยต่อแผ่นธรณี",
    shortLabel: "🗺️ รอยต่อแผ่นธรณี",
    pastelBgClass: "bg-purple-50 text-purple-800 border-purple-200/70 hover:bg-purple-100",
    activeClass: "bg-purple-600 text-white border-purple-700 shadow-xs font-semibold",
  },
  {
    id: "wave-basics",
    label: "05 คลื่นกล",
    shortLabel: "〰️ คลื่นกล",
    pastelBgClass: "bg-indigo-50 text-indigo-800 border-indigo-200/70 hover:bg-indigo-100",
    activeClass: "bg-indigo-600 text-white border-indigo-700 shadow-xs font-semibold",
  },
  {
    id: "resonance",
    label: "06 การสั่นพ้อง",
    shortLabel: "🔔 การสั่นพ้อง",
    pastelBgClass: "bg-violet-50 text-violet-800 border-violet-200/70 hover:bg-violet-100",
    activeClass: "bg-violet-600 text-white border-violet-700 shadow-xs font-semibold",
  },
  {
    id: "sound-basics",
    label: "07 เสียง",
    shortLabel: "🔊 เสียง",
    pastelBgClass: "bg-emerald-50 text-emerald-800 border-emerald-200/70 hover:bg-emerald-100",
    activeClass: "bg-emerald-600 text-white border-emerald-700 shadow-xs font-semibold",
  },
  {
    id: "sound-phenomena",
    label: "08 ดอพเพลอร์",
    shortLabel: "📢 ดอพเพลอร์",
    pastelBgClass: "bg-teal-50 text-teal-800 border-teal-200/70 hover:bg-teal-100",
    activeClass: "bg-teal-600 text-white border-teal-700 shadow-xs font-semibold",
  },
  {
    id: "eye-vision",
    label: "09 การมองเห็น",
    shortLabel: "👁️ การมองเห็น",
    pastelBgClass: "bg-rose-50 text-rose-800 border-rose-200/70 hover:bg-rose-100",
    activeClass: "bg-rose-600 text-white border-rose-700 shadow-xs font-semibold",
  },
  {
    id: "color-mixing",
    label: "10 แสงสี",
    shortLabel: "🎨 แสงสี & สารสี",
    pastelBgClass: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200/70 hover:bg-fuchsia-100",
    activeClass: "bg-fuchsia-600 text-white border-fuchsia-700 shadow-xs font-semibold",
  },
  {
    id: "quick-review",
    label: "⚡ สรุปด่วน",
    shortLabel: "⚡ สรุปด่วน 3 นาที",
    pastelBgClass: "bg-yellow-100 text-yellow-900 border-yellow-300 hover:bg-yellow-200 font-semibold",
    activeClass: "bg-yellow-500 text-zinc-950 border-yellow-600 shadow-xs font-bold ring-2 ring-yellow-300",
  },
];

export function QuickTopicNav() {
  const [activeId, setActiveId] = useState<string>("volcano");
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const scrollActiveIntoView = useCallback((id: string) => {
    const btn = buttonRefs.current.get(id);
    const nav = navRef.current;
    if (!btn || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    if (btnRect.left < navRect.left || btnRect.right > navRect.right) {
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const newId = visible[0].target.id;
          setActiveId(newId);
          scrollActiveIntoView(newId);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0.05 }
    );

    TOPICS.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [scrollActiveIntoView]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs">
      <div className="max-w-4xl mx-auto px-4">
        <div
          ref={navRef}
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2.5"
        >
          {TOPICS.map((topic) => {
            const isActive = activeId === topic.id;
            return (
              <button
                key={topic.id}
                ref={(el) => { if (el) buttonRefs.current.set(topic.id, el); }}
                onClick={() => scrollTo(topic.id)}
                className={`whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm rounded-lg border transition-all duration-150 shrink-0 cursor-pointer ${
                  isActive ? topic.activeClass : topic.pastelBgClass
                }`}
              >
                {topic.shortLabel}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
