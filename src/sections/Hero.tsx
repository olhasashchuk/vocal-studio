import { Button } from "@/components/Button";

type HeroProps = {
  eyebrow?: string;
  title: string | string[];
  description: string;
  details?: string[];
  buttonText: string;
  buttonHref: string;
  desktopImage?: string;
  mobileImage?: string;
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  details = [],
  buttonText,
  buttonHref,
  desktopImage,
  mobileImage,
  className = "",
}: HeroProps) {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <section
      className={`bg-background-dark text-foreground relative flex min-h-[100svh] items-end overflow-hidden px-6 pt-24 pb-24 md:min-h-screen md:items-center md:px-16 md:py-24 lg:px-24 ${className}`}
    >
      {desktopImage && (
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: `url(${desktopImage})` }}
        />
      )}

      {mobileImage && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${mobileImage})` }}
        />
      )}

      {!mobileImage && desktopImage && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${desktopImage})` }}
        />
      )}

      <div
        aria-hidden="true"
        className="from-background-dark/5 via-background-dark/45 to-background-dark/95 md:from-background-dark md:via-background-dark/70 md:to-background-dark/10 absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r"
      />

      <div
        aria-hidden="true"
        className="bg-background-dark/10 md:bg-background-dark/15 absolute inset-0"
      />

      <div className="relative z-10 max-w-[620px] md:max-w-4xl">
        {eyebrow && (
          <p className="text-primary mb-4 font-sans text-[12px] leading-[1.3] font-semibold tracking-[0.12em] uppercase md:mb-5 md:text-[14px]">
            {eyebrow}
          </p>
        )}

        <h1 className="text-foreground font-serif text-[39px] leading-[1.02] font-medium tracking-[-0.03em] md:text-[82px] md:leading-[1.04]">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="text-text-inverse-muted mt-6 max-w-[560px] font-sans text-[16px] leading-[1.55] font-normal md:mt-8 md:text-[21px] md:leading-[1.65]">
          {description}
        </p>

        {details.length > 0 && (
          <>
            <div className="bg-primary mt-7 h-px w-12 md:hidden" />

            <div className="text-text-inverse-muted mt-5 flex flex-col gap-1.5 font-sans text-[15px] leading-[1.4] md:mt-8 md:flex-row md:flex-wrap md:gap-x-4 md:gap-y-2 md:text-[17px]">
              {details.map((detail, index) => (
                <span key={detail} className="inline-flex items-center gap-x-4">
                  <span>{detail}</span>

                  {index < details.length - 1 && (
                    <span className="text-primary-hover hidden md:inline">|</span>
                  )}
                </span>
              ))}
            </div>
          </>
        )}

        <Button
          href={buttonHref}
          className="mt-7 w-fit px-5 py-3 text-[13px] md:mt-10 md:px-8 md:py-4 md:text-[15px]"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
