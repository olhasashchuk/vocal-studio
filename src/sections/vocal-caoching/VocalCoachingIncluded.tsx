import { Description } from "@/components/Description";
import { Eyebrow } from "@/components/Eyebrow";
import { SplitGrid, SplitGridColumn } from "@/components/SplitGrid";
import { Title } from "@/components/Title";
import { WrapperSection } from "@/components/WrapperSection";
import { vocalCoachingIncludedContent } from "@/content/vocal-coaching";
import { CircleCheckBig } from "lucide-react";

export function VocalCoachingIncluded() {
  return (
    <WrapperSection>
      <SplitGrid>
        <SplitGridColumn>
          <Eyebrow>{vocalCoachingIncludedContent.eyebrow}</Eyebrow>
          <Title>{vocalCoachingIncludedContent.title}</Title>
          <Description>{vocalCoachingIncludedContent.description}</Description>
        </SplitGridColumn>

        <SplitGridColumn className="border-border-light border-y">
          {vocalCoachingIncludedContent.items.map((item) => (
            <div
              key={item}
              className="border-border-light bg-background-card hover:border-primary flex items-center gap-4 border px-5 py-5 transition duration-300"
            >
              <CircleCheckBig
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
