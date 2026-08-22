"use client";
import { vocalCoachingFaqContent } from "@/content/vocal-coaching";
import { WrapperSection } from "@/components/WrapperSection";
import { Eyebrow } from "@/components/Eyebrow";
import { SplitGrid, SplitGridColumn } from "@/components/SplitGrid";
import { Title } from "@/components/Title";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function VocalCoachingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperSection>
      <SplitGrid>
        <SplitGridColumn>
          <Eyebrow>{vocalCoachingFaqContent.eyebrow}</Eyebrow>
          <Title>{vocalCoachingFaqContent.title}</Title>
        </SplitGridColumn>

        <SplitGridColumn className="border-border-light border-y">
          {vocalCoachingFaqContent.items.map((item, index) => (
            <div
              key={item.question}
              className="border-border-light border-b py-6 last:border-b-0"
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="text-primary flex w-full cursor-pointer items-center justify-between"
              >
                <span className="font-sans text-[18px] leading-[1.4] font-semibold md:text-[20px]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="text-text-primary mt-4 font-sans md:text-lg">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </SplitGridColumn>
      </SplitGrid>
    </WrapperSection>
  );
}
