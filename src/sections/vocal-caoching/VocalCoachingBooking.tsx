import { vocalCoachingBookingContent } from "@/content/vocal-coaching";

export function VocalCoachingBooking() {
  const { form } = vocalCoachingBookingContent;

  return (
    <section
      id="booking"
      className="bg-background-dark-soft text-foreground px-6 py-18 md:px-16 md:py-28 lg:px-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div>
          <p className="text-primary mb-4 font-sans text-[12px] leading-[1.3] font-semibold tracking-[0.12em] uppercase md:text-[14px]">
            {vocalCoachingBookingContent.eyebrow}
          </p>

          <h2 className="text-foreground font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.02em] md:text-[58px]">
            {vocalCoachingBookingContent.title}
          </h2>

          <p className="text-text-inverse-muted mt-6 max-w-md font-sans text-[16px] leading-[1.65] md:text-[18px]">
            {vocalCoachingBookingContent.description}
          </p>
        </div>

        <form className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-primary mb-2 block font-sans text-[12px] font-semibold tracking-[0.12em] uppercase">
                {form.nameLabel}
              </span>

              <input
                type="text"
                name="name"
                className="border-border-dark bg-background-dark/35 text-foreground placeholder:text-text-inverse-muted/60 focus:border-primary w-full border px-4 py-4 font-sans text-[16px] transition duration-300 outline-none"
              />
            </label>

            <label className="block">
              <span className="text-primary mb-2 block font-sans text-[12px] font-semibold tracking-[0.12em] uppercase">
                {form.emailLabel}
              </span>

              <input
                type="email"
                name="email"
                className="border-border-dark bg-background-dark/35 text-foreground placeholder:text-text-inverse-muted/60 focus:border-primary w-full border px-4 py-4 font-sans text-[16px] transition duration-300 outline-none"
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-primary mb-2 block font-sans text-[12px] font-semibold tracking-[0.12em] uppercase">
                {form.phoneLabel}
              </span>

              <input
                type="text"
                name="phone"
                className="border-border-dark bg-background-dark/35 text-foreground placeholder:text-text-inverse-muted/60 focus:border-primary w-full border px-4 py-4 font-sans text-[16px] transition duration-300 outline-none"
              />
            </label>

            <label className="block">
              <span className="text-primary mb-2 block font-sans text-[12px] font-semibold tracking-[0.12em] uppercase">
                {form.dateLabel}
              </span>

              <input
                type="text"
                name="preferredDate"
                placeholder="Example: next Friday afternoon"
                className="border-border-dark bg-background-dark/35 text-foreground placeholder:text-text-inverse-muted/60 focus:border-primary w-full border px-4 py-4 font-sans text-[16px] transition duration-300 outline-none"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-primary mb-2 block font-sans text-[12px] font-semibold tracking-[0.12em] uppercase">
              {form.messageLabel}
            </span>

            <textarea
              name="message"
              rows={6}
              placeholder={form.messagePlaceholder}
              className="border-border-dark bg-background-dark/35 text-foreground placeholder:text-text-inverse-muted/60 focus:border-primary w-full resize-none border px-4 py-4 font-sans text-[16px] leading-[1.6] transition duration-300 outline-none"
            />
          </label>

          <button
            type="submit"
            className="bg-primary-dark text-foreground hover:bg-primary-hover mt-2 w-fit px-7 py-4 font-sans text-[14px] font-semibold tracking-[0.08em] uppercase transition duration-300"
          >
            {form.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
