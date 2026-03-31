import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, TrendingUp, MessageCircle } from "lucide-react";
import { mockPains } from "@/data/wateraid-mock";

export const PainsSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">Top Pains & Complaints</h2>
        <p className="text-sm text-muted-foreground">Clustered by theme, ranked by severity</p>
      </div>

      {mockPains.map((pain, i) => (
        <motion.div
          key={pain.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-xl bg-card border border-border shadow-card overflow-hidden"
        >
          <button
            onClick={() => setExpanded(expanded === pain.id ? null : pain.id)}
            className="w-full px-5 py-4 flex items-center gap-4 text-left hover:bg-secondary/30 transition-colors"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive font-bold text-sm">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm truncate">{pain.title}</h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-secondary">
                  {pain.theme}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3" /> {pain.mentionRate}% mentions
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${j < Math.round(pain.severity) ? "text-warning fill-warning" : "text-border"}`}
                  />
                ))}
                <span className="text-xs font-mono ml-1">{pain.severity}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${expanded === pain.id ? "rotate-180" : ""}`} />
            </div>
          </button>

          <AnimatePresence>
            {expanded === pain.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 space-y-3 border-t border-border pt-4">
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <MessageCircle className="w-3 h-3" /> Real Quotes
                  </h4>
                  {pain.quotes.map((q, qi) => (
                    <div key={qi} className="pl-4 border-l-2 border-primary/30">
                      <p className="text-sm italic text-foreground/80">"{q.text}"</p>
                      <p className="text-xs text-muted-foreground mt-1">— {q.source}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
