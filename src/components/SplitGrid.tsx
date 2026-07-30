import type { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string;
};

export function SplitGrid({ children, className = "" }: GridProps) {
  return (
    <div
      className={`grid gap-6 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16 ${className}`}
    >
      {children}
    </div>
  );
}

export function SplitGridColumn({ children, className = "" }: GridProps) {
  return <div className={`min-w-0 ${className}`}>{children}</div>;
}
