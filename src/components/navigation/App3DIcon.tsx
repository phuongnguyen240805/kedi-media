"use client";

import React, { useId } from "react";

export type App3DIconName =
  | "store"
  | "ecommerce"
  | "automation"
  | "learning"
  | "ads"
  | "cloudphone"
  | "offerkit"
  | "seo"
  | "analytics"
  | "local"
  | "content"
  | "keywords"
  | "reports"
  | "authority"
  | "ai";

type Props = {
  name: App3DIconName;
  className?: string;
};

const glyphs: Record<App3DIconName, React.ReactNode> = {
  store: <><rect x="18" y="19" width="28" height="28" rx="8"/><path d="M24 27h16M24 34h16M24 41h9"/></>,
  ecommerce: <><path d="M20 25h5l3 15h17l3-11H27"/><circle cx="32" cy="45" r="2"/><circle cx="43" cy="45" r="2"/></>,
  automation: <><circle cx="25" cy="25" r="5"/><circle cx="42" cy="39" r="5"/><path d="M29 27l9 8M39 25l-3 4M28 40l7-1"/></>,
  learning: <><path d="M18 27l14-8 14 8-14 8-14-8Z"/><path d="M23 31v8c7 5 14 5 18 0v-8M46 28v10"/></>,
  ads: <><path d="M20 39V27l22-7v24l-22-5Z"/><path d="M42 25l7-4v22l-7-4M26 39l2 8h8l-3-7"/></>,
  cloudphone: <><rect x="24" y="16" width="17" height="31" rx="5"/><path d="M29 21h7M30 42h5M19 28c-4 3-4 8 0 11M46 27c5 4 5 9 0 13"/></>,
  offerkit: <><rect x="20" y="18" width="25" height="29" rx="6"/><path d="M27 18v-3h11v3M26 27h13M26 34h13M26 41h8"/><path d="M41 34l4 4 6-8"/></>,
  seo: <><circle cx="29" cy="29" r="11"/><path d="M37 37l10 10M24 29h10M29 24v10"/></>,
  analytics: <><path d="M20 44V32M29 44V24M38 44V29M47 44V18"/><path d="M18 46h31"/></>,
  local: <><path d="M32 48s13-12 13-23a13 13 0 1 0-26 0c0 11 13 23 13 23Z"/><circle cx="32" cy="25" r="5"/></>,
  content: <><rect x="21" y="17" width="25" height="31" rx="6"/><path d="M27 25h13M27 31h13M27 37h8"/><path d="M39 39l8-8 3 3-8 8-5 2 2-5Z"/></>,
  keywords: <><circle cx="27" cy="29" r="8"/><path d="M34 34l13 13M35 38l4-4M40 43l4-4"/></>,
  reports: <><rect x="20" y="18" width="27" height="30" rx="6"/><path d="M27 40V32M34 40V25M41 40V29M26 44h16"/></>,
  authority: <><path d="M32 16l14 6v10c0 9-6 14-14 18-8-4-14-9-14-18V22l14-6Z"/><path d="M26 32l4 4 8-9"/></>,
  ai: <><rect x="21" y="21" width="23" height="23" rx="7"/><path d="M27 33h10M32 28v10M28 21v-5M37 21v-5M28 49v-5M37 49v-5M21 28h-5M21 37h-5M49 28h-5M49 37h-5"/></>,
};

export function App3DIcon({ name, className = "h-8 w-8" }: Props) {
  const id = useId().replace(/:/g, "");
  const bg = `${id}-bg`;
  const face = `${id}-face`;
  const gloss = `${id}-gloss`;
  const shadow = `${id}-shadow`;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={bg} x1="10" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF8D9" />
          <stop offset="0.52" stopColor="#FFC629" />
          <stop offset="1" stopColor="#EBAF00" />
        </linearGradient>
        <linearGradient id={face} x1="20" y1="17" x2="46" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor="#174C85" />
          <stop offset="1" stopColor="#0B2D5B" />
        </linearGradient>
        <linearGradient id={gloss} x1="16" y1="12" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.88" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id={shadow} x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0B2D5B" floodOpacity="0.22" />
        </filter>
      </defs>

      <ellipse cx="32" cy="54" rx="18" ry="5" fill="#0B2D5B" opacity="0.11" />
      <g filter={`url(#${shadow})`}>
        <rect x="8" y="7" width="48" height="48" rx="15" fill={`url(#${bg})`} />
        <path d="M12 22C17 11 27 9 39 10c6 .5 11 2 14 5v11C43 18 27 17 12 28v-6Z" fill={`url(#${gloss})`} opacity="0.72" />
        <path d="M16 49c10 4 25 4 40-7v3c0 6-5 10-11 10H19c-2 0-4-.5-6-1.5l3-4.5Z" fill="#C48A00" opacity="0.18" />
        <g
          fill="none"
          stroke={`url(#${face})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {glyphs[name]}
        </g>
      </g>
    </svg>
  );
}
