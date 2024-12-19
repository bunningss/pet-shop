import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className }: HeadingProps) {
  return (
    <h2 className={cn("text-6xl capitalize font-extrabold", className)}>
      {children}
    </h2>
  );
}
