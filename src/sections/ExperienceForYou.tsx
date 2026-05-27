import { experienceForYouContent } from "@/content/home";

export function ExperienceForYou() {
  return (
    <section
      id="experiences"
      className="bg-background-light text-text-primary px-6 py-18 md:px-16 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-primary mb-4 font-sans text-[12px] leading-[1.3] font-semibold tracking-[0.12em] uppercase md:mb-5 md:text-[14px]">
            {experienceForYouContent.eyebrow}
          </p>

          <h2 className="text-text-primary font-serif text-[34px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[56px]">
            {experienceForYouContent.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:mt-18 md:grid-cols-2 lg:grid-cols-4">
          {experienceForYouContent.items.map((item) => (
            <article
              key={item.title}
              className="group border-border-light bg-background-card hover:border-primary hover:bg-primary min-h-55 border p-6 transition duration-300 hover:-translate-y-1 md:min-h-65 md:p-8"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-primary group-hover:text-foreground font-sans text-[12px] leading-[1.3] font-semibold tracking-[0.12em] uppercase transition duration-300 md:text-[13px]">
                    {item.title}
                  </h3>

                  <p className="text-text-primary mt-5 font-serif text-[21px] leading-[1.2] tracking-[-0.01em] transition duration-300 md:mt-6 md:text-[24px] md:leading-tight">
                    {item.text}
                  </p>
                </div>

                <div className="bg-primary group-hover:bg-foreground mt-8 h-px w-10 transition duration-300 md:mt-10 md:w-12" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
