export function Description({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <p className="text-text-secondary mt-6 font-sans text-[16px] md:text-[18px]">
      {children}
    </p>
  );
}
