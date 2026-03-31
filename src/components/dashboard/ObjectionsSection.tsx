import { motion } from "framer-motion";
import { ShieldAlert, MessageCircle } from "lucide-react";
import { mockObjections } from "@/data/wateraid-mock";

const categoryColors: Record<string, string> = {
  Trust: "bg-destructive/10 text-destructive",
  Relevance: "bg-warning/10 text-warning",
  Transparency: "bg-info/10 text-info",
  Identity: "bg-accent/10 text-accent",
};

export const ObjectionsSection = () => (
  <div className="space-y-4">
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-1">Objections & Blockers</h2>
      <p className="text-sm text-muted-foreground">Why users hesitate to engage or donate</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mockObjections.map((obj, i) => (
        <motion.div
          key={obj.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="p-5 rounded-xl bg-card border border-border shadow-card"
        >
          <div className="flex items-start gap-3 mb-4">
            <ShieldAlert className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded mb-2 ${categoryColors[obj.category] || "bg-secondary text-secondary-foreground"}`}>
                {obj.category}
              </span>
              <h3 className="font-semibold text-sm">{obj.title}</h3>
            </div>
          </div>
          <div className="space-y-3">
            {obj.quotes.map((q, qi) => (
              <div key={qi} className="pl-3 border-l-2 border-border">
                <p className="text-xs italic text-foreground/70">"{q.text}"</p>
                <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                  <MessageCircle className="w-2.5 h-2.5" /> {q.source}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
