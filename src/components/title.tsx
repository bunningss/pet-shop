interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h3 className="text-3xl font-bold capitalize">{children}</h3>;
}
