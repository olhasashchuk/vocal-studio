export function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="text-text-primary font-serif text-[34px] leading-[1.1] font-medium md:text-[52px]">
      {children}
    </h2>
  );
}
