"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import React from "react";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import NotificationDropdown from "@/components/header/NotificationDropdown";
import UserDropdown from "@/components/header/UserDropdown";
import KediCommandSearch from "@/components/navigation/KediCommandSearch";
import { useSidebar } from "@/context/SidebarContext";

const PAGE_TITLES: Array<{ prefix: string; title: string }> = [
  { prefix: "/landing-pages", title: "Landing Page" },
  { prefix: "/ban-hang", title: "Bán hàng" },
  { prefix: "/khach-hang", title: "Khách hàng" },
  { prefix: "/cskh", title: "Chăm sóc khách hàng" },
  { prefix: "/ladiwork", title: "Kedi Work" },
  { prefix: "/automation", title: "Automation" },
  { prefix: "/bao-cao", title: "Báo cáo" },
  { prefix: "/kho-ung-dung", title: "Kho ứng dụng" },
  { prefix: "/cloudphone", title: "Kedi CloudPhone" },
  { prefix: "/e-learning", title: "Kedi Learning" },
  { prefix: "/offerkit", title: "Kedi OfferKit" },
  { prefix: "/ai-seo", title: "Kedi SEO" },
  { prefix: "/site-metrics", title: "Kedi Analytics" },
  { prefix: "/local", title: "Kedi Local" },
  { prefix: "/content", title: "Kedi Content" },
  { prefix: "/keywords", title: "Kedi Keywords" },
  { prefix: "/authority", title: "Kedi Authority" },
  { prefix: "/settings", title: "Cài đặt" },
];

function resolvePageTitle(pathname: string | null) {
  if (!pathname || pathname === "/") return "Tổng quan";
  return PAGE_TITLES.find(({ prefix }) => pathname.startsWith(prefix))?.title ?? "Kedi Workspace";
}

const AppHeader: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();
  const pathname = usePathname();
  const pageTitle = resolvePageTitle(pathname);

  return (
    <header className="sticky top-0 z-99999 flex h-[52px] w-full items-center border-b border-kedi-navy/10 bg-white/95 backdrop-blur-xl dark:border-kedi-yellow/20 dark:bg-kedi-navy/95">
      <div className="flex w-full items-center gap-3 px-3 md:px-4 lg:px-5">
        <div className="flex min-w-0 items-center gap-2.5 lg:w-[210px]">
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-kedi-navy/15 text-kedi-navy outline-none transition-colors hover:bg-gray-50 focus-visible:ring-3 focus-visible:ring-kedi-yellow/30 dark:border-white/20 dark:text-white dark:hover:bg-white/5 lg:hidden"
            onClick={toggleMobileSidebar}
            aria-label={isMobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            )}
          </button>

          <Image
            src="/brand/kedi-icon.png"
            width={30}
            height={30}
            alt=""
            className="h-7 w-7 shrink-0 object-contain lg:hidden"
            aria-hidden="true"
          />

          <div className="min-w-0">
            <p className="hidden text-xs font-medium text-kedi-navy/45 dark:text-white/45 sm:block">
              Không gian làm việc
            </p>
            <p className="truncate text-sm font-semibold text-kedi-navy dark:text-white">
              {pageTitle}
            </p>
          </div>
        </div>

        <div className="mx-auto hidden w-full max-w-[520px] lg:block">
          <KediCommandSearch />
        </div>

        <div className="ml-auto flex h-9 shrink-0 items-center gap-1.5">
          <ThemeToggleButton />
          <NotificationDropdown />
          <div className="ml-1 flex h-8 items-center border-l border-kedi-navy/10 pl-2 dark:border-white/15">
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
