export function WrapperSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-background-light text-text-primary px-6 py-18 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
