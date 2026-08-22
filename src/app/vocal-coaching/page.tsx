import { vocalCoachingHeroContent } from "@/content/vocal-coaching";
import { Hero } from "@/sections/Hero";
import { VocalCoachingBooking } from "@/sections/vocal-caoching/VocalCoachingBooking";
import { VocalCoachingFaq } from "@/sections/vocal-caoching/VocalCoachingFaq";
import { VocalCoachingForYou } from "@/sections/vocal-caoching/VocalCoachingForYou";
import { VocalCoachingIncluded } from "@/sections/vocal-caoching/VocalCoachingIncluded";
import { VocalCoachingOutcome } from "@/sections/vocal-caoching/VocalCoachingOutcome";
import { VocalCoachingPractical } from "@/sections/vocal-caoching/VocalCoachingPractical";
import { VocalCoachingSession } from "@/sections/vocal-caoching/VocalCoachingSession";

export default function VocalCoaching() {
  return (
    <>
      <Hero {...vocalCoachingHeroContent} />
      <VocalCoachingForYou />
      <VocalCoachingSession />
      <VocalCoachingIncluded />
      <VocalCoachingOutcome />
      <VocalCoachingPractical />
      <VocalCoachingBooking />
      <VocalCoachingFaq />
    </>
  );
}
