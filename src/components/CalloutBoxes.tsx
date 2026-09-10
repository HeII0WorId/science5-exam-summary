"use client";

import React from "react";
import { MathView } from "./MathView";
import { Lightbulb, Pin, AlertTriangle, Target, Calculator } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Shared Callout Box — Soft Pastel Colors, Gentle for Eyes            */
/* ------------------------------------------------------------------ */

export function KeyPoint({
  title = "Key Point",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-xl border border-amber-200/90 bg-amber-50/70 p-4 sm:p-5 text-zinc-900 shadow-xs">
      <div className="flex items-center gap-2 font-semibold text-amber-900 mb-2 text-xs sm:text-sm tracking-wide">
        <span className="p-1 rounded-md bg-amber-100/90 text-amber-800 flex items-center justify-center">
          <Lightbulb className="w-3.5 h-3.5 stroke-[2.2]" />
        </span>
        <span>💡 {title}</span>
      </div>
      <div className="text-sm sm:text-[15px] text-amber-950 leading-relaxed space-y-1.5 pl-0.5">
        {children}
      </div>
    </div>
  );
}

export function RememberBox({
  title = "จำให้ได้",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-xl border border-sky-200/90 bg-sky-50/70 p-4 sm:p-5 text-zinc-900 shadow-xs">
      <div className="flex items-center gap-2 font-semibold text-sky-900 mb-2 text-xs sm:text-sm tracking-wide">
        <span className="p-1 rounded-md bg-sky-100/90 text-sky-800 flex items-center justify-center">
          <Pin className="w-3.5 h-3.5 stroke-[2.2]" />
        </span>
        <span>📌 {title}</span>
      </div>
      <div className="text-sm sm:text-[15px] text-sky-950 leading-relaxed space-y-1.5 pl-0.5">
        {children}
      </div>
    </div>
  );
}

export function WarningBox({
  title = "ระวัง",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-xl border border-rose-200/90 bg-rose-50/70 p-4 sm:p-5 text-zinc-900 shadow-xs">
      <div className="flex items-center gap-2 font-semibold text-rose-900 mb-2 text-xs sm:text-sm tracking-wide">
        <span className="p-1 rounded-md bg-rose-100/90 text-rose-800 flex items-center justify-center">
          <AlertTriangle className="w-3.5 h-3.5 stroke-[2.2]" />
        </span>
        <span>⚠️ {title}</span>
      </div>
      <div className="text-sm sm:text-[15px] text-rose-950 leading-relaxed space-y-1.5 pl-0.5">
        {children}
      </div>
    </div>
  );
}

export function ExamTarget({
  title = "จุดออกสอบ",
  badge,
  children,
}: {
  title?: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-xl border border-purple-200/90 bg-purple-50/70 p-4 sm:p-5 text-zinc-900 shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 font-semibold text-purple-900 text-xs sm:text-sm tracking-wide">
          <span className="p-1 rounded-md bg-purple-100/90 text-purple-800 flex items-center justify-center">
            <Target className="w-3.5 h-3.5 stroke-[2.2]" />
          </span>
          <span>🎯 {title}</span>
        </div>
        {badge && (
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200/60">
            {badge}
          </span>
        )}
      </div>
      <div className="text-sm sm:text-[15px] text-purple-950 leading-relaxed space-y-1.5 pl-0.5">
        {children}
      </div>
    </div>
  );
}

export function FormulaBox({
  title = "Formula",
  formula,
  explanation,
}: {
  title?: string;
  formula: string;
  explanation?: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-xl border border-emerald-200/90 bg-emerald-50/60 p-4 sm:p-5 text-zinc-900 shadow-xs">
      <div className="flex items-center gap-2 font-semibold text-emerald-900 mb-2 text-xs sm:text-sm tracking-wide">
        <span className="p-1 rounded-md bg-emerald-100/90 text-emerald-800 flex items-center justify-center">
          <Calculator className="w-3.5 h-3.5 stroke-[2.2]" />
        </span>
        <span>🧮 {title}</span>
      </div>
      <div className="my-2.5 flex items-center justify-center p-3 rounded-lg bg-white/90 border border-emerald-200/80 text-emerald-950 overflow-x-auto shadow-2xs">
        <MathView math={formula} display={true} className="text-lg sm:text-xl font-medium" />
      </div>
      {explanation && (
        <div className="text-xs sm:text-sm text-emerald-900/90 mt-2 pl-0.5 leading-relaxed">
          {explanation}
        </div>
      )}
    </div>
  );
}
