import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { mockOutcomes } from "@/data/wateraid-mock";

export const OutcomesSection = () => (
  <div className="space-y-4">
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-1">Desired Outcomes</h2>
      <p className="text-sm text-muted-foreground">What users actually want — translated into jobs to be done</p>
    </div>

    {mockOutcomes.map((outcome, i) => (
      <motion.div
        key={outcome.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
        className="p-5 rounded-xl bg-card border border-border shadow-card flex items-start gap-4"
      >
        <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm mb-1">{outcome.statement}</h3>
          <p className="text-xs text-muted-foreground italic">Job: "{outcome.jobToBeDone}"</p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-lg font-bold text-primary">{outcome.mentionRate}%</div>
          <div className="text-[10px] text-muted-foreground font-mono">mention rate</div>
        </div>
      </motion.div>
    ))}
  </div>
);
