import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
  className?: string;
}

const buttonStyles: Record<string, string> = {
  default:
    "bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-500",
  secondary:
    "border border-slate-200 bg-white text-slate-950 hover:bg-slate-50 focus-visible:ring-slate-500",
};

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 ${buttonStyles[variant]} ${className}`}
      {...props}
    />
  );
}
