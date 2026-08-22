import { Description } from "@/components/Description";
import { Eyebrow } from "@/components/Eyebrow";
import { SplitGrid, SplitGridColumn } from "@/components/SplitGrid";
import { Title } from "@/components/Title";
import { WrapperSection } from "@/components/WrapperSection";
import { vocalCoachingForYouContent } from "@/content/vocal-coaching";
import { Sparkle } from "lucide-react";

export function VocalCoachingForYou() {
  return (
    <WrapperSection>
      <SplitGrid>
        <SplitGridColumn>
          <Eyebrow>{vocalCoachingForYouContent.eyebrow}</Eyebrow>
          <Title>{vocalCoachingForYouContent.title}</Title>
          <Description>{vocalCoachingForYouContent.description}</Description>
        </SplitGridColumn>

        <SplitGridColumn className="border-border-light border-y">
          {vocalCoachingForYouContent.items.map((item) => (
            <div
              key={item}
              className="border-border-light flex items-start gap-5 border-b py-4 last:border-b-0 md:gap-6"
            >
              <Sparkle
                aria-hidden="true"
                className="text-primary mt-0.5 h-5 w-5 shrink-0"
                strokeWidth={1.5}
              />

              <p className="text-text-primary font-sans md:text-lg">{item}</p>
            </div>
          ))}
        </SplitGridColumn>
      </SplitGrid>
    </WrapperSection>
  );
}
