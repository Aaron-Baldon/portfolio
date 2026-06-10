import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-zinc-200",
  secondary: "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800",
  ghost: "bg-transparent text-zinc-300 hover:text-white hover:bg-zinc-900",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}