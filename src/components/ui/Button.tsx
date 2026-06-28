import * as React from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-40 active:scale-95 cursor-pointer font-sans";
  
  const variants = {
    primary: "bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold tracking-wider hover:shadow-[0_0_15px_rgba(245,158,11,0.35)]",
    secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/20",
    outline: "border border-white/10 bg-slate-950/40 text-slate-300 hover:bg-white/5 hover:text-white",
    ghost: "text-slate-300 hover:bg-white/5 hover:text-white",
    destructive: "bg-rose-600/90 text-white shadow-sm hover:bg-rose-500",
  };

  const sizes = {
    sm: "h-8.5 px-3.5 text-xs rounded-lg",
    md: "h-10 px-5 rounded-xl",
    lg: "h-12 px-8 rounded-xl text-base",
    icon: "h-10 w-10 rounded-xl p-0",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}
      {...props}
    />
  );
}
