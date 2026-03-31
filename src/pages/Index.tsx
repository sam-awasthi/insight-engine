import { useState } from "react";
import { motion } from "framer-motion";
import { InputScreen } from "@/components/InputScreen";
import { Dashboard } from "@/components/Dashboard";

export interface AnalysisInput {
  productUrl: string;
  brandName: string;
  category: string;
}

const Index = () => {
  const [analysisInput, setAnalysisInput] = useState<AnalysisInput | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleAnalyze = (input: AnalysisInput) => {
    setAnalysisInput(input);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowDashboard(true);
    }, 3000);
  };

  if (showDashboard && analysisInput) {
    return <Dashboard input={analysisInput} onBack={() => { setShowDashboard(false); setAnalysisInput(null); }} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated text-xs font-mono text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            insight engine
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Turn complaints into <span className="text-gradient-brand">campaigns</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Aggregate online sentiment, extract actionable insights, and generate high-performing ad content — instantly.
          </p>
        </div>

        {isAnalyzing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-16"
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-border" />
              <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
            <p className="text-muted-foreground font-mono text-sm">
              Scanning sources for <span className="text-foreground">{analysisInput?.brandName}</span>…
            </p>
            <div className="flex gap-2 text-xs text-muted-foreground font-mono">
              {["Reddit", "Trustpilot", "Twitter/X", "G2"].map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.5 }}
                  className="px-2 py-1 rounded bg-surface-elevated border border-border"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ) : (
          <InputScreen onAnalyze={handleAnalyze} />
        )}
      </motion.div>
    </div>
  );
};

export default Index;
