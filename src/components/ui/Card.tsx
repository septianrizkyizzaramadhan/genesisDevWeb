import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-white p-6 transition-all duration-200",
        "hover:border-accent/50 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}