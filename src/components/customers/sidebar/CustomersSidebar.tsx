import React from "react";
import { useResizableSidebar } from "@/hooks/useResizableSidebar";
import { ResizeHandle } from "@/components/common/ResizeHandle";
import {
  IconUser,
  IconBuilding,
  IconSegment,
  IconTag,
  IconCustomField,
  IconErrorLog,
} from "../dung-chung/icons";

interface CustomersSidebarProps {
  activeSubTab: string;
  setActiveSubTab: (tab: string) => void;
}

const customerNav = [
  {
    id: "customers",
    label: "Danh sách",
    icon: <IconUser size={16} />,
  },
  {
    id: "companies",
    label: "Danh sách công ty",
    icon: <IconBuilding size={16} />,
  },
  {
    id: "segments",
    label: "Quản lý Segment",
    icon: <IconSegment size={16} />,
  },
  {
    id: "tags",
    label: "Quản lý Tag",
    icon: <IconTag size={16} />,
  },
  {
    id: "custom-fields",
    label: "Trường tuỳ chỉnh",
    icon: <IconCustomField size={16} />,
  },
  {
    id: "error-logs",
    label: "Lịch sử lỗi",
    icon: <IconErrorLog size={16} />,
  },
];

export const CustomersSidebar: React.FC<CustomersSidebarProps> = ({
  activeSubTab,
  setActiveSubTab,
}) => {
  const { width, isDragging, handleMouseDown, resetWidth } = useResizableSidebar({
    defaultWidth: 185,
    minWidth: 180,
  });

  return (
    <div
      style={{ "--sub-sidebar-width": `${width}px` } as React.CSSProperties}
      className="sub-sidebar-scroll relative flex h-full w-full flex-shrink-0 flex-col overflow-y-auto overflow-x-hidden border-r border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950 lg:w-[var(--sub-sidebar-width,185px)]"
    >
      <ResizeHandle
        onMouseDown={handleMouseDown}
        onDoubleClick={resetWidth}
        isDragging={isDragging}
      />
      {/* Title */}
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white px-2 mb-1">
        Khách hàng
      </h2>

      {/* Customer Group */}
      <div>
        <span className="text-ui-micro font-semibold text-slate-400 dark:text-slate-500 tracking-[0.08em] uppercase px-3 select-none">
          Quản lý khách hàng
        </span>
        <nav className="space-y-1">
          {customerNav.map((item) => {
            const isActive = activeSubTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSubTab(item.id)}
                className={`relative flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium outline-none transition-[background-color,color,box-shadow] duration-150 focus-visible:ring-3 focus-visible:ring-kedi-yellow/20 group ${
                  isActive
                    ? "bg-brand-50 text-[#3a5680] shadow-[inset_2px_0_0_#FFC629] dark:bg-kedi-yellow/15 dark:text-[#ffe08a] dark:shadow-[inset_2px_0_0_#FFC629] font-semibold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-slate-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`${
                      isActive
                        ? "text-kedi-navy dark:text-kedi-yellow"
                        : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-350"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
