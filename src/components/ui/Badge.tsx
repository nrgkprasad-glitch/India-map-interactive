import * as React from "react";

export interface BadgeProps {
  variant?: "primary" | "secondary" | "outline" | "accent";
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-md border px-2.5 py-0.75 text-[10px] font-bold font-sans uppercase tracking-wider transition-colors focus:outline-none";
  
  const variants = {
    primary: "border-amber-500/30 bg-amber-500/10 text-amber-500",
    secondary: "border-white/10 bg-white/5 text-slate-300",
    outline: "border-white/20 bg-transparent text-slate-400",
    accent: "border-amber-500/30 bg-amber-500 text-slate-950 shadow-inner",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
      {...props}
    />
  );
}
