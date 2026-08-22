import { vocalCoachingSessionContent } from "@/content/vocal-coaching";

export function VocalCoachingSession() {
  return (
    <section className="bg-background-dark-soft text-foreground px-6 py-18 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-primary mb-4 font-sans text-[12px] leading-[1.3] font-semibold tracking-[0.12em] uppercase md:text-[14px]">
            {vocalCoachingSessionContent.eyebrow}
          </p>

          <h2 className="text-foreground font-serif text-[34px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[52px]">
            {vocalCoachingSessionContent.title}
          </h2>

          <p className="text-text-inverse-muted mt-6 max-w-2xl font-sans text-[16px] leading-[1.65] md:text-[18px]">
            {vocalCoachingSessionContent.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-4">
          {vocalCoachingSessionContent.steps.map((step, index) => (
            <article
              key={step.title}
              className="border-border-dark bg-background-dark/35 hover:border-primary border p-6 transition duration-300 hover:-translate-y-1 md:min-h-75"
            >
              <div className="flex h-full flex-col">
                <div>
                  <span className="text-primary font-sans text-[12px] font-semibold tracking-[0.12em] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-foreground mt-5 font-serif text-[25px] leading-[1.15] font-medium tracking-[-0.01em] md:text-[28px]">
                    {step.title}
                  </h3>

                  <p className="text-primary mt-3 font-sans text-[13px] font-semibold tracking-widest uppercase">
                    {step.duration}
                  </p>
                </div>

                <p className="text-text-inverse-muted mt-8 font-sans text-[15px] leading-[1.65] md:text-[16px]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
