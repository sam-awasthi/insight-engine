import { useState } from "react";
import { motion } from "framer-motion";
import type { AnalysisInput } from "@/pages/Index";

interface Props {
  onAnalyze: (input: AnalysisInput) => void;
}

export const InputScreen = ({ onAnalyze }: Props) => {
  const [productUrl, setProductUrl] = useState("https://www.wateraid.org");
  const [brandName, setBrandName] = useState("WaterAid");
  const [category, setCategory] = useState("Charity / Non-profit");

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={(e) => {
        e.preventDefault();
        onAnalyze({ productUrl, brandName, category });
      }}
      className="space-y-4"
    >
      <div className="space-y-1.5">
        <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Product URL</label>
        <input
          value={productUrl}
          onChange={(e) => setProductUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder="https://example.com"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Brand Name</label>
          <input
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="WaterAid"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="SaaS, E-commerce…"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-lg font-semibold text-primary-foreground transition-all hover:brightness-110 glow-brand"
        style={{ background: "var(--gradient-brand)" }}
      >
        Analyse Sentiment →
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Pre-loaded with WaterAid data for demo
      </p>
    </motion.form>
  );
};
