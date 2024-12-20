import { Title } from "./title";

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export function Section({ children, title }: SectionProps) {
  return (
    <section>
      <Title>{title}</Title>

      <div className="mt-4">{children}</div>
    </section>
  );
}
