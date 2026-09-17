import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "ghost" | "danger";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-sm",
  };

  const variantClasses = {
    primary:
      "border border-kedi-yellow bg-kedi-yellow text-[#3a5680] shadow-xs hover:border-[#e0a800] hover:bg-[#e0a800] dark:border-kedi-yellow dark:bg-kedi-yellow dark:text-[#3a5680] dark:hover:bg-[#ffd45c]",
    outline:
      "border border-kedi-navy/20 bg-white text-kedi-navy shadow-xs hover:border-kedi-navy/40 hover:bg-brand-50 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-kedi-yellow/50 dark:hover:bg-white/5",
    ghost:
      "border border-transparent bg-transparent text-kedi-navy hover:bg-brand-50 hover:text-kedi-navy dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white",
    danger:
      "border border-red-600 bg-red-600 text-white shadow-xs hover:border-red-700 hover:bg-red-700 dark:border-red-500 dark:bg-red-500 dark:hover:bg-red-400",
  };

  return (
    <button
      type={type}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium outline-none transition-[background-color,border-color,color,box-shadow,transform] duration-150 focus-visible:ring-3 focus-visible:ring-kedi-yellow/30 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
