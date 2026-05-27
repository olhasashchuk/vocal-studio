type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-[8px] px-8 py-4 font-sans text-[15px] font-semibold uppercase leading-[1.2] tracking-[0.03em] transition duration-300";

  const variantClasses = {
    primary: "bg-primary-dark text-foreground hover:bg-primary-hover",
    secondary: "border border-secondary bg-transparent text-foreground hover:bg-white/10",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
