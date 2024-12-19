export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-2">
      <div className="max-w-screen-2xl">{children}</div>
    </div>
  );
}
