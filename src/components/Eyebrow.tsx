export function Eyebrow({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <p className="text-primary mb-4 font-sans text-[12px] font-semibold tracking-[0.12em] uppercase md:text-[14px]">
      {children}
    </p>
  );
}
