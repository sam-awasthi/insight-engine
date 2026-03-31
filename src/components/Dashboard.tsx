import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { AnalysisInput } from "@/pages/Index";
import { OverviewBar } from "./dashboard/OverviewBar";
import { PainsSection } from "./dashboard/PainsSection";
import { ObjectionsSection } from "./dashboard/ObjectionsSection";
import { OutcomesSection } from "./dashboard/OutcomesSection";
import { AdGenerator } from "./dashboard/AdGenerator";
import { RepositioningSection } from "./dashboard/RepositioningSection";
import { CharityProfileSection } from "./dashboard/CharityProfileSection";
import { BrandGuidelinesSection } from "./dashboard/BrandGuidelinesSection";

type Tab = "overview" | "profile" | "complaints" | "objections" | "outcomes" | "ads" | "repositioning";

const tabs: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "profile", label: "Charity Profile" },
  { key: "complaints", label: "Top Pains" },
  { key: "objections", label: "Objections" },
  { key: "outcomes", label: "Desired Outcomes" },
  { key: "ads", label: "Ad Generator" },
  { key: "repositioning", label: "Repositioning" },
];

interface Props {
  input: AnalysisInput;
  onBack: () => void;
}

export const Dashboard = ({ input, onBack }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <h1 className="text-sm font-semibold">{input.brandName}</h1>
              <p className="text-xs text-muted-foreground font-mono">{input.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-mono text-primary">Live</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex gap-1 -mb-px overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.key
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && <OverviewBar onNavigate={setActiveTab} />}
          {activeTab === "profile" && <CharityProfileSection />}
          {activeTab === "complaints" && <PainsSection />}
          {activeTab === "objections" && <ObjectionsSection />}
          {activeTab === "outcomes" && <OutcomesSection />}
          {activeTab === "ads" && <AdGenerator />}
          {activeTab === "repositioning" && <RepositioningSection />}
        </motion.div>
      </main>
    </div>
  );
};
