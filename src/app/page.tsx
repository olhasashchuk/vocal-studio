import { homeHeroContent } from "@/content/home";
import { ExperienceForYou } from "@/sections/ExperienceForYou";
import { Hero } from "@/sections/Hero";
import { ServicesPreview } from "@/sections/ServicesPreview";

export default function Home() {
  return (
    <>
      <Hero {...homeHeroContent} />
      <ExperienceForYou />
      <ServicesPreview />
    </>
  );
}
