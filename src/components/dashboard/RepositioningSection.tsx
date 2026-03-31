import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Megaphone, Users } from "lucide-react";
import { mockRepositioning, mockCampaignConcepts } from "@/data/wateraid-mock";

export const RepositioningSection = () => (
  <div className="space-y-8">
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-1">Repositioning Insights</h2>
      <p className="text-sm text-muted-foreground">From traditional charity to culturally relevant movement</p>
    </div>

    {/* Perception shifts */}
    <div className="space-y-4">
      <h3 className="text-sm font-semibold flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-warning" /> Perception Shifts Needed
      </h3>
      {mockRepositioning.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="p-5 rounded-xl bg-card border border-border shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 p-3 rounded-lg bg-destructive/5 border border-destructive/10">
              <span className="text-[10px] font-mono text-destructive uppercase">Current</span>
              <p className="text-sm font-medium mt-1">{r.currentPerception}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="flex-1 p-3 rounded-lg bg-primary/5 border border-primary/10">
              <span className="text-[10px] font-mono text-primary uppercase">Desired</span>
              <p className="text-sm font-medium mt-1">{r.desiredPerception}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-secondary/50">
              <span className="font-mono text-muted-foreground uppercase text-[10px]">Gap</span>
              <p className="text-foreground/70 mt-1">{r.gap}</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50">
              <span className="font-mono text-primary uppercase text-[10px]">Opportunity</span>
              <p className="text-foreground/70 mt-1">{r.opportunity}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Campaign concepts */}
    <div className="space-y-4">
      <h3 className="text-sm font-semibold flex items-center gap-2">
        <Megaphone className="w-4 h-4 text-accent" /> Campaign Concepts
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockCampaignConcepts.map((concept, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-5 rounded-xl bg-card border border-border shadow-card flex flex-col"
          >
            <h4 className="font-bold text-sm mb-2 text-gradient-brand">{concept.title}</h4>
            <p className="text-xs text-foreground/70 mb-4 flex-1">{concept.description}</p>
            <div className="space-y-2 text-[10px]">
              <div className="flex items-center gap-1.5">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span className="text-muted-foreground">{concept.creators}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Megaphone className="w-3 h-3 text-muted-foreground" />
                <span className="text-muted-foreground">{concept.formats}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
