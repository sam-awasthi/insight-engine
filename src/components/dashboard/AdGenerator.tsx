import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Video, Share2, ChevronDown } from "lucide-react";
import { mockPains } from "@/data/wateraid-mock";

export const AdGenerator = () => {
  const [selectedPain, setSelectedPain] = useState(mockPains[0].id);
  const [expandedAngle, setExpandedAngle] = useState<number | null>(null);
  const [expandedScript, setExpandedScript] = useState<number | null>(null);

  const pain = mockPains.find((p) => p.id === selectedPain)!;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">Ad Generator</h2>
        <p className="text-sm text-muted-foreground">Select a pain point to instantly generate ad angles, scripts, and channel variants</p>
      </div>

      {/* Pain selector */}
      <div className="flex gap-2 flex-wrap">
        {mockPains.map((p) => (
          <button
            key={p.id}
            onClick={() => { setSelectedPain(p.id); setExpandedAngle(null); setExpandedScript(null); }}
            className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
              selectedPain === p.id
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-foreground/20"
            }`}
          >
            {p.title.length > 30 ? p.title.slice(0, 30) + "…" : p.title}
          </button>
        ))}
      </div>

      {/* Ad Angles */}
      <div>
        <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-primary" /> Ad Angles ({pain.adAngles.length})
        </h3>
        <div className="space-y-3">
          {pain.adAngles.map((angle, i) => (
            <div key={i} className="rounded-xl bg-card border border-border shadow-card overflow-hidden">
              <button
                onClick={() => setExpandedAngle(expandedAngle === i ? null : i)}
                className="w-full px-5 py-4 text-left hover:bg-secondary/30 transition-colors flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-sm">"{angle.hook}"</p>
                  <span className="inline-block text-[10px] font-mono text-accent mt-1 px-2 py-0.5 rounded bg-accent/10">
                    {angle.emotionalTrigger}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${expandedAngle === i ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedAngle === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-1">Story</h4>
                        <p className="text-sm text-foreground/80">{angle.story}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-1">CTA</h4>
                        <p className="text-sm font-semibold text-primary">{angle.cta}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase mb-3 flex items-center gap-1.5">
                          <Share2 className="w-3 h-3" /> Channel Variants
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {Object.entries(angle.channels).map(([channel, copy]) => (
                            <div key={channel} className="p-3 rounded-lg bg-secondary/50 border border-border">
                              <span className="text-[10px] font-mono text-primary uppercase">{channel}</span>
                              <p className="text-xs text-foreground/70 mt-1">{copy}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Video Scripts */}
      <div>
        <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
          <Video className="w-4 h-4 text-accent" /> Video Scripts ({pain.scripts.length})
        </h3>
        <div className="space-y-3">
          {pain.scripts.map((script, i) => (
            <div key={i} className="rounded-xl bg-card border border-border shadow-card overflow-hidden">
              <button
                onClick={() => setExpandedScript(expandedScript === i ? null : i)}
                className="w-full px-5 py-4 text-left hover:bg-secondary/30 transition-colors flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-sm">{script.title}</p>
                  <span className="text-[10px] font-mono text-muted-foreground">{script.duration}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${expandedScript === i ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedScript === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
                      {[
                        { label: "Hook", value: script.hookLine, color: "border-primary" },
                        { label: "Problem", value: script.problem, color: "border-destructive" },
                        { label: "Insight", value: script.insight, color: "border-accent" },
                        { label: "Solution", value: script.solution, color: "border-info" },
                        { label: "CTA", value: script.cta, color: "border-primary" },
                      ].map((step) => (
                        <div key={step.label} className={`pl-3 border-l-2 ${step.color}`}>
                          <span className="text-[10px] font-mono text-muted-foreground uppercase">{step.label}</span>
                          <p className="text-sm text-foreground/80">{step.value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
