import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}