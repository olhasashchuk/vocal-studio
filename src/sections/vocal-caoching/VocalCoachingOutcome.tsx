import { vocalCoachingOutcomeContent } from "@/content/vocal-coaching";

export function VocalCoachingOutcome() {
  return (
    <section className="bg-background-dark-soft text-foreground px-6 py-18 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-primary mb-5 font-sans text-[12px] leading-[1.3] font-semibold tracking-[0.12em] uppercase md:text-[14px]">
          {vocalCoachingOutcomeContent.eyebrow}
        </p>

        <h2 className="text-foreground font-serif text-[38px] leading-[1.08] font-medium tracking-[-0.02em] md:text-[64px]">
          {vocalCoachingOutcomeContent.title}
        </h2>

        <p className="text-text-inverse-muted mx-auto mt-7 font-sans text-[17px] leading-[1.7] md:mt-8 md:text-[20px]">
          {vocalCoachingOutcomeContent.description}
        </p>

        <div className="bg-primary mx-auto mt-10 h-px w-16" />

        <div className="text-primary mt-8 flex flex-col items-center gap-3 font-sans text-[13px] leading-[1.4] font-semibold tracking-[0.12em] uppercase md:flex-row md:justify-center md:gap-6">
          {vocalCoachingOutcomeContent.outcomes.map((outcome, index) => (
            <span key={outcome} className="inline-flex items-center gap-6">
              <span>{outcome}</span>

              {index < vocalCoachingOutcomeContent.outcomes.length - 1 && (
                <span className="text-border-dark hidden md:inline">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
