"use client";

import React from "react";

import type { CommerceStoreLink } from "@/features/commerce/types";

export function ChannelHealthBadge({ storeLink }: { storeLink: CommerceStoreLink }) {
  if (storeLink.status === "active") {
    return (
      <span className="ladi-status-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-50 text-kedi-navy dark:bg-kedi-yellow/10 dark:text-kedi-yellow border border-kedi-yellow/40/80 dark:border-kedi-yellow/30">
        <span className="w-1.5 h-1.5 rounded-full bg-kedi-yellow" />
        Gian hàng sẵn sàng
      </span>
    );
  }

  if (storeLink.status === "pending") {
    return (
      <span className="ladi-status-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/80">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        Đang chuẩn bị…
      </span>
    );
  }

  return (
    <span className="ladi-status-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/80">
      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
      Lỗi kết nối
    </span>
  );
}
