import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <>
      {/* <div className="bg-background-light">
        <h1 className="text-primary">Hello Next.js!</h1>
        <Link className="text-primary" href={`/vocal-coaching`}>
          Go to Vocal Coaching
        </Link>
      </div> */}
      <Hero
        eyebrow="Vocal & Recording Experiences"
        title={["Your Voice.", "Your Song.", "Your Moment."]}
        description="Private vocal coaching, professional recording and personal music experiences designed to help you feel like an artist."
        details={["Vocal Coaching", "Song Recording", "Music Gifts"]}
        buttonText="Explore Experiences"
        buttonHref="#experiences"
        desktopImage="/images/home-hero-desktop.jpg"
        mobileImage="/images/home-hero-mobile.jpg"
      />
    </>
  );
}
