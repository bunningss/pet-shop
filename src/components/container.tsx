export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto h-full w-full">
      <div className="p-2 max-w-screen-2xl">{children}</div>
    </div>
  );
}
