import Link from "next/link";

import { servicesPreviewContent } from "@/content/home";

export function ServicesPreview() {
  return (
    <section className="bg-background-light text-text-primary px-6 py-18 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-primary mb-4 font-sans text-[12px] leading-[1.3] font-semibold tracking-[0.12em] uppercase md:text-[14px]">
              {servicesPreviewContent.eyebrow}
            </p>

            <h2 className="text-text-primary font-serif text-[34px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[50px]">
              {servicesPreviewContent.title}
            </h2>
          </div>

          <p className="text-text-secondary max-w-xl font-sans text-[16px] leading-[1.65] md:text-[17px]">
            {servicesPreviewContent.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {servicesPreviewContent.items.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-background-card block overflow-hidden shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <article className="flex h-full flex-col">
                <div className="relative h-65 overflow-hidden md:h-80 lg:h-90">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  <div
                    aria-hidden="true"
                    className="from-background-dark/0 via-background-dark/10 to-background-dark/60 absolute inset-0 bg-linear-to-b"
                  />

                  <div className="absolute right-5 bottom-5 left-5">
                    <h3 className="text-foreground font-serif text-[26px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[30px]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="border-border-light flex flex-1 flex-col justify-between border border-t-0 p-5 md:p-6">
                  <p className="text-text-muted font-sans text-[15px] leading-[1.6]">
                    {service.description}
                  </p>

                  <div className="text-primary group-hover:text-primary-dark mt-6 inline-flex items-center gap-3 font-sans text-[12px] font-semibold tracking-widest uppercase transition duration-300">
                    <span>{service.cta}</span>
                    <span
                      aria-hidden="true"
                      className="transition duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
