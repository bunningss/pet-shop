import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  className?: string;
}

export function Title({ title, className }: TitleProps) {
  return (
    <h2 className={cn("capitalize text-2xl font-bold", className)}>{title}</h2>
  );
}
