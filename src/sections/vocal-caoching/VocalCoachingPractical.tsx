import { WrapperSection } from "@/components/WrapperSection";
import { Description } from "@/components/Description";
import { Eyebrow } from "@/components/Eyebrow";
import { SplitGrid, SplitGridColumn } from "@/components/SplitGrid";
import { Title } from "@/components/Title";
import { vocalCoachingPracticalContent } from "@/content/vocal-coaching";

export function VocalCoachingPractical() {
  return (
    <WrapperSection>
      <SplitGrid>
        <SplitGridColumn>
          <Eyebrow>{vocalCoachingPracticalContent.eyebrow}</Eyebrow>
          <Title>{vocalCoachingPracticalContent.title}</Title>
          <Description>{vocalCoachingPracticalContent.description}</Description>
        </SplitGridColumn>

        <SplitGridColumn className="border-border-light border-y">
          {vocalCoachingPracticalContent.items.map((item) => (
            <div
              key={item.label}
              className="border-border-light border-b py-2 last:border-b-0 md:py-4"
            >
              <p className="text-primary font-sans text-[10px] font-semibold tracking-[0.12em] uppercase">
                {item.label}{" "}
              </p>

              <p className="text-text-primary font-sans md:text-lg">{item.value}</p>
            </div>
          ))}
        </SplitGridColumn>
      </SplitGrid>
    </WrapperSection>
  );
}
