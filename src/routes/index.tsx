import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AIFeatures } from "@/components/landing/AIFeatures";
import { AfricanConstruction } from "@/components/landing/AfricanConstruction";
import { WhyArchimartng } from "@/components/landing/WhyArchimartng";
import { Marketplace } from "@/components/landing/Marketplace";
import { Professionals } from "@/components/landing/Professionals";
import { VerifiedProfiles } from "@/components/landing/VerifiedProfiles";
import { SmartPricing } from "@/components/landing/SmartPricing";
import { ArchiAI } from "@/components/landing/ArchiAI";
import { Diaspora } from "@/components/landing/Diaspora";
import { BuildTrack } from "@/components/landing/BuildTrack";
import { Archive } from "@/components/landing/Archive";
import { Trust } from "@/components/landing/Trust";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyNow } from "@/components/landing/WhyNow";
import { Waitlist } from "@/components/landing/Waitlist";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "ARCHIMARTng — Buy Plans. Hire Pros. Build Smarter.";
const DESC =
  "Africa's premium construction-tech platform. Buy ready-to-build architectural designs and hire verified architects, builders and engineers — securely.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <AfricanConstruction />
        <WhyArchimartng />
        <AIFeatures />
        <ArchiAI />
        <SmartPricing />
        <Marketplace />
        <Professionals />
        <VerifiedProfiles />
        <Diaspora />
        <BuildTrack />
        <Archive />
        <Trust />
        <HowItWorks />
        <WhyNow />
        <Waitlist />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}
