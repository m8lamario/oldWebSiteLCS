import React from "react";
import { Hero } from "@/components/Hero/Hero";
import { MissionSection } from "@/components/MissionSection/MissionSection";
import { CompetitionsSection } from "@/components/CompetitionsSection/CompetitionsSection";
import { CompetitionsMapSection } from "@/components/CompetitionsMapSection/CompetitionsMapSection";
import { NationalFinalsSection } from "@/components/NationalFinalsSection/NationalFinalsSection";
import { SchoolInviteSection } from "@/components/SchoolInviteSection/SchoolInviteSection";
import { CircuitStatsSection } from "@/components/CircuitStatsSection/CircuitStatsSection";
import { NewsSection } from "@/components/NewsSection/NewsSection";
import { PartnersSection } from "@/components/PartnersSection/PartnersSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <CompetitionsMapSection />
      <CompetitionsSection />
      <NationalFinalsSection />
      <SchoolInviteSection />
      <CircuitStatsSection />
      <NewsSection />
      <PartnersSection />
    </>
  );
}
