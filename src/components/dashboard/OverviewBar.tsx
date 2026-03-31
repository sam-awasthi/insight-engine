import { Star, MessageSquare, BarChart3, Zap, Target } from "lucide-react";
import { mockStats, mockPains } from "@/data/wateraid-mock";

interface Props {
  onNavigate: (tab: string) => void;
}

export const OverviewBar = ({ onNavigate }: Props) => {
  const stars = mockStats.sentimentScore;

  return (
    <div className="space-y-8">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Sentiment Score", value: `${stars.toFixed(1)} / 5`, icon: Star, color: "text-warning" },
          { label: "Total Mentions", value: mockStats.totalMentions.toLocaleString(), icon: MessageSquare, color: "text-info" },
          { label: "Top Pain Severity", value: `${mockPains[0].severity} / 5`, icon: Zap, color: "text-destructive" },
          { label: "Timeframe", value: mockStats.timeframe, icon: BarChart3, color: "text-primary" },
        ].map((stat) => (
          <div key={stat.label} className="p-5 rounded-xl bg-card border border-border shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Source mix */}
      <div className="p-5 rounded-xl bg-card border border-border shadow-card">
        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Source Distribution</h3>
        <div className="flex gap-2 h-3 rounded-full overflow-hidden">
          {Object.entries(mockStats.sourceMix).map(([source, pct], i) => {
            const colors = ["bg-primary", "bg-accent", "bg-info", "bg-warning"];
            return <div key={source} className={`${colors[i]} rounded-full`} style={{ width: `${pct}%` }} />;
          })}
        </div>
        <div className="flex gap-4 mt-3 flex-wrap">
          {Object.entries(mockStats.sourceMix).map(([source, pct], i) => {
            const colors = ["text-primary", "text-accent", "text-info", "text-warning"];
            return (
              <span key={source} className="flex items-center gap-1.5 text-xs">
                <span className={`w-2 h-2 rounded-full ${colors[i].replace("text-", "bg-")}`} />
                <span className="text-muted-foreground capitalize">{source}</span>
                <span className="font-mono">{pct}%</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Top Pains", desc: `${mockPains.length} themes identified`, tab: "complaints", icon: Zap },
          { label: "Ad Generator", desc: "Create content from insights", tab: "ads", icon: Target },
          { label: "Repositioning", desc: "Brand strategy insights", tab: "repositioning", icon: BarChart3 },
        ].map((link) => (
          <button
            key={link.tab}
            onClick={() => onNavigate(link.tab)}
            className="p-5 rounded-xl bg-card border border-border shadow-card text-left hover:border-primary/40 transition-all group"
          >
            <link.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-sm mb-1">{link.label}</h3>
            <p className="text-xs text-muted-foreground">{link.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
