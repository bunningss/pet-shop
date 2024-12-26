export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <div className="p-2 max-w-screen-2xl mx-auto">{children}</div>
    </div>
  );
}
