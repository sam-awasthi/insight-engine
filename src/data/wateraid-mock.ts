export interface Pain {
  id: string;
  title: string;
  theme: string;
  severity: number;
  mentionRate: number;
  quotes: { text: string; source: string }[];
  adAngles: AdAngle[];
  scripts: VideoScript[];
}

export interface AdAngle {
  hook: string;
  story: string;
  cta: string;
  emotionalTrigger: string;
  channels: { tiktok: string; meta: string; linkedin: string };
}

export interface VideoScript {
  title: string;
  hookLine: string;
  problem: string;
  insight: string;
  solution: string;
  cta: string;
  duration: string;
}

export interface Objection {
  id: string;
  category: string;
  title: string;
  quotes: { text: string; source: string }[];
}

export interface DesiredOutcome {
  id: string;
  statement: string;
  jobToBeDone: string;
  mentionRate: number;
}

export interface RepositioningInsight {
  currentPerception: string;
  desiredPerception: string;
  gap: string;
  opportunity: string;
}

export const mockPains: Pain[] = [
  {
    id: "p1",
    title: "No visibility into where donations go",
    theme: "Transparency",
    severity: 4.6,
    mentionRate: 34,
    quotes: [
      { text: "I donated £20 but I have no idea what it actually did. Did it build a well? Buy a filter? I'll never know.", source: "Reddit r/charity" },
      { text: "Their annual report is 80 pages of vague stats. I want to see MY impact.", source: "Trustpilot" },
      { text: "Compare to GiveDirectly where you literally see the person you helped. WaterAid feels like a black hole.", source: "Reddit r/effectivealtruism" },
    ],
    adAngles: [
      {
        hook: "You donated. Then what?",
        story: "Most charities take your money and send you a thank-you email. That's it. No updates, no proof, no story. We think you deserve to see exactly where every pound goes — and who it reaches.",
        cta: "Track your impact with WaterAid →",
        emotionalTrigger: "frustration → empowerment",
        channels: {
          tiktok: "POV: you donated to charity 6 months ago and still have no idea where your money went 💀 [cut to WaterAid impact tracker]",
          meta: "Carousel: 'What most charities show you' (generic thank you) → 'What WaterAid shows you' (real impact data, real faces, real wells)",
          linkedin: "We asked 1,000 donors what frustrated them most about giving. #1 answer: 'I never see where it goes.' Here's how WaterAid is changing that.",
        },
      },
      {
        hook: "What if you could see the exact well your £20 built?",
        story: "Radical transparency isn't a buzzword — it's a GPS pin, a photo, a name. Real people, real water, real proof.",
        cta: "See your impact. Not a receipt.",
        emotionalTrigger: "hope → connection",
        channels: {
          tiktok: "What £20 actually looks like in rural Mozambique 🇲🇿 [documentary-style reveal]",
          meta: "Video: Follow the journey of a single donation from your phone to a village well",
          linkedin: "Transparency in charity isn't optional anymore. Here's what radical accountability looks like in practice.",
        },
      },
    ],
    scripts: [
      {
        title: "The Black Hole",
        hookLine: "You donated to charity. Where did it go? [shrug emoji]",
        problem: "Most charities give you a receipt and disappear. No updates. No proof. Just vibes.",
        insight: "Gen Z doesn't donate on faith. They donate on evidence.",
        solution: "WaterAid now lets you track exactly where your money goes — the village, the well, the people.",
        cta: "Follow your first donation journey. Link in bio.",
        duration: "30s",
      },
      {
        title: "Receipt vs Reality",
        hookLine: "This is what most charities send you [shows generic email]. This is what WaterAid sends you [shows village footage].",
        problem: "We've been conditioned to accept 'thank you for your generous donation' as enough.",
        insight: "But what if you could actually see the faces behind your impact?",
        solution: "WaterAid's impact tracker connects donors directly to projects — real-time, no fluff.",
        cta: "Stop donating blind. Start seeing your impact.",
        duration: "35s",
      },
    ],
  },
  {
    id: "p2",
    title: "Feels outdated and 'boomer charity'",
    theme: "Brand Relevance",
    severity: 4.2,
    mentionRate: 28,
    quotes: [
      { text: "WaterAid gives very 'your nan watches this on BBC and sends £5 a month' energy", source: "Twitter/X" },
      { text: "Their branding looks like it hasn't been updated since 2005. Hard to take seriously.", source: "Reddit r/design" },
      { text: "I want to support water causes but WaterAid just isn't… cool? Is that terrible to say?", source: "Reddit r/GenZ" },
    ],
    adAngles: [
      {
        hook: "Your nan's favourite charity just got a glow-up.",
        story: "WaterAid was founded in 1981. The mission hasn't changed. But the way we talk about it? That's overdue for an upgrade. Clean water isn't a boomer issue — it's THE issue.",
        cta: "Same mission. New energy. Join the wave.",
        emotionalTrigger: "identity → belonging",
        channels: {
          tiktok: "No offence to your nan but WaterAid isn't just for Sunday afternoon BBC viewers anymore 🌊 [rebrand reveal]",
          meta: "Split screen: old WaterAid ad (sad piano music) → new WaterAid energy (bold, modern, urgent)",
          linkedin: "How do you make a 40-year-old charity relevant to a generation that grew up on TikTok? Here's our approach.",
        },
      },
    ],
    scripts: [
      {
        title: "The Glow-Up",
        hookLine: "Name a charity your nan loves. I'll wait. [pause] Yeah, that one.",
        problem: "WaterAid has incredible impact but zero cultural relevance for anyone under 30.",
        insight: "The issue isn't the cause — it's the packaging. Clean water is objectively one of the most impactful things you can fund.",
        solution: "We're not changing what we do. We're changing how we show up. Bold. Direct. Built for your feed, not your letterbox.",
        cta: "This isn't your nan's charity anymore. wateraid.org",
        duration: "35s",
      },
    ],
  },
  {
    id: "p3",
    title: "Guilt-tripping marketing doesn't work on Gen Z",
    theme: "Messaging Tone",
    severity: 4.0,
    mentionRate: 25,
    quotes: [
      { text: "I immediately swipe past any ad that tries to guilt me with sad kids. It's manipulative.", source: "TikTok comments" },
      { text: "Charity ads from the 2000s: sad music + suffering children. Gen Z response: *skip*", source: "Reddit r/marketing" },
      { text: "Show me the solution, not the problem. I know there's a problem.", source: "Instagram comments" },
    ],
    adAngles: [
      {
        hook: "We're done with the sad piano music.",
        story: "For decades, charities sold guilt. We're selling something different: agency. You're not saving anyone — you're joining a movement that's already winning.",
        cta: "Join the builders, not the saviours.",
        emotionalTrigger: "agency → pride",
        channels: {
          tiktok: "POV: a charity ad that doesn't try to ruin your day [upbeat, solution-focused montage]",
          meta: "Video: 'This isn't a charity ad. It's a progress report.' [confident, data-forward, hopeful]",
          linkedin: "Guilt-based fundraising is dying. Here's why the most effective charities are shifting to empowerment-based messaging.",
        },
      },
    ],
    scripts: [
      {
        title: "No More Sad Pianos",
        hookLine: "[sad piano starts] Nah. [record scratch, upbeat music kicks in]",
        problem: "Charities have been guilt-tripping for decades. Gen Z isn't buying it.",
        insight: "People want to feel powerful, not sad. They want to be part of something that's winning.",
        solution: "WaterAid's new approach: we show the progress. The wells built. The communities thriving. The wins.",
        cta: "Be part of what's working. Not what's breaking.",
        duration: "30s",
      },
    ],
  },
  {
    id: "p4",
    title: "Unclear how WaterAid differs from others",
    theme: "Differentiation",
    severity: 3.8,
    mentionRate: 22,
    quotes: [
      { text: "WaterAid, Water.org, charity:water — I literally can't tell the difference.", source: "Reddit r/charity" },
      { text: "What does WaterAid do that charity:water doesn't? Genuinely asking.", source: "Quora" },
    ],
    adAngles: [
      {
        hook: "Three water charities walk into a bar…",
        story: "charity:water has great branding. Water.org has Matt Damon. WaterAid has been quietly building water systems in 26 countries since before either existed. We don't just build wells — we build the infrastructure, policy, and local capacity to keep water flowing forever.",
        cta: "Not the flashiest. Just the most effective.",
        emotionalTrigger: "curiosity → respect",
        channels: {
          tiktok: "The water charity tier list nobody asked for 💧 (but you should see this) [comparison breakdown]",
          meta: "Infographic carousel: WaterAid vs others — what actually makes them different (spoiler: it's sustainability)",
          linkedin: "In a sea of water charities, differentiation matters. Here's what WaterAid's 40-year track record looks like in data.",
        },
      },
    ],
    scripts: [
      {
        title: "The Tier List",
        hookLine: "Let me rank water charities and piss everyone off [tier list graphic]",
        problem: "There are so many water charities that donors genuinely can't tell them apart.",
        insight: "WaterAid doesn't just build wells — they build entire systems. Policy. Local teams. Infrastructure that outlasts the media cycle.",
        solution: "When the cameras leave, WaterAid stays. That's the difference.",
        cta: "Support the charity that stays. wateraid.org",
        duration: "40s",
      },
    ],
  },
  {
    id: "p5",
    title: "High admin/CEO pay concerns",
    theme: "Trust",
    severity: 3.5,
    mentionRate: 18,
    quotes: [
      { text: "I looked up the CEO salary and it's over £150k. That's my donations paying for a nice house in London.", source: "Trustpilot" },
      { text: "How much of my £10/month actually reaches people who need it?", source: "Reddit r/UKPersonalFinance" },
    ],
    adAngles: [
      {
        hook: "Yes, our CEO gets paid. Here's why that's a good thing.",
        story: "Running a global organization serving 26 countries requires top talent. Our CEO's salary is public, our financials are open, and 87p of every pound goes directly to programs. We could hire cheaper leadership — but you'd get worse results.",
        cta: "Check our numbers. They're public for a reason.",
        emotionalTrigger: "skepticism → respect",
        channels: {
          tiktok: "When someone says 'charity CEOs shouldn't earn money' [proceeds to explain why that's actually bad for the people you're trying to help]",
          meta: "Data visual: 'Here's exactly where your £10/month goes' — transparent breakdown with real program data",
          linkedin: "The 'overhead myth' is one of the most damaging ideas in philanthropy. Here's the data on why talent investment = impact multiplication.",
        },
      },
    ],
    scripts: [
      {
        title: "The Overhead Myth",
        hookLine: "Hot take: charity CEOs SHOULD earn good money [controversial opener]",
        problem: "People think high salaries = waste. But underpaying leadership = worse outcomes for the people you're trying to help.",
        insight: "Would you rather a £50k CEO who wastes donations, or a £150k CEO who turns every pound into maximum impact?",
        solution: "WaterAid publishes all financials. 87p of every pound reaches programs. That's the real metric.",
        cta: "Judge us by our impact, not our payroll. wateraid.org/finances",
        duration: "35s",
      },
    ],
  },
];

export const mockObjections: Objection[] = [
  {
    id: "o1",
    category: "Trust",
    title: "I don't trust that my money reaches people",
    quotes: [
      { text: "Too many middlemen. By the time my £5 gets there, it's probably 50p.", source: "Trustpilot" },
      { text: "I'd rather donate locally where I can see the impact myself.", source: "Reddit" },
    ],
  },
  {
    id: "o2",
    category: "Relevance",
    title: "Water isn't the most urgent issue",
    quotes: [
      { text: "Climate change, mental health, cost of living — water feels like a solved problem compared to what's happening here.", source: "Twitter/X" },
      { text: "I know it's important but it's hard to prioritize water when I can barely afford rent.", source: "Reddit r/GenZ" },
    ],
  },
  {
    id: "o3",
    category: "Transparency",
    title: "I can't see tangible results",
    quotes: [
      { text: "charity:water shows you the exact GPS coordinates of the well you funded. WaterAid? Nothing.", source: "Reddit" },
    ],
  },
  {
    id: "o4",
    category: "Identity",
    title: "It doesn't align with my identity",
    quotes: [
      { text: "Supporting WaterAid doesn't feel like 'me'. It's not something I'd share on my story.", source: "Focus group transcript" },
      { text: "If I'm going to donate, I want it to be something my friends would respect, not roll their eyes at.", source: "Reddit r/GenZ" },
    ],
  },
];

export const mockOutcomes: DesiredOutcome[] = [
  { id: "d1", statement: "Users want to see exactly where their money goes", jobToBeDone: "Feel confident that my donation creates real, traceable impact", mentionRate: 42 },
  { id: "d2", statement: "Users want to feel proud sharing their support", jobToBeDone: "Signal my values to my social circle through causes I back", mentionRate: 31 },
  { id: "d3", statement: "Users want quick, digestible proof of impact", jobToBeDone: "Validate my giving decisions in under 30 seconds", mentionRate: 28 },
  { id: "d4", statement: "Users want to participate, not just donate", jobToBeDone: "Feel like an active contributor to change, not a passive wallet", mentionRate: 25 },
  { id: "d5", statement: "Users want modern, shareable content from charities", jobToBeDone: "Engage with charity content that fits my social media ecosystem", mentionRate: 22 },
];

export const mockRepositioning: RepositioningInsight[] = [
  {
    currentPerception: "Traditional, safe, establishment charity",
    desiredPerception: "Bold, transparent, culturally embedded movement",
    gap: "WaterAid is respected but not relevant. It's trusted by donors over 45 but invisible to those under 25.",
    opportunity: "Lean into radical transparency + creator-native content to bridge the gap without losing existing donor trust.",
  },
  {
    currentPerception: "Guilt-driven donation model",
    desiredPerception: "Empowerment and participation model",
    gap: "Current messaging relies on sympathy. Gen Z responds to agency, community, and visible progress.",
    opportunity: "Shift from 'These people need you' to 'Join what's already working' — celebrate wins, not suffering.",
  },
  {
    currentPerception: "One of many water charities",
    desiredPerception: "The most credible, systemic water organization",
    gap: "charity:water owns 'cool' water charity space. WaterAid has deeper impact but weaker brand differentiation.",
    opportunity: "Own 'systems change' — WaterAid doesn't just build wells, it builds the infrastructure and policy to keep water flowing. That's the story.",
  },
];

export const mockCampaignConcepts = [
  {
    title: "Follow The Water",
    description: "A real-time, social-first campaign where donors can track their donation's journey from phone to village — GPS pins, video updates, community stories. Think 'Domino's Pizza Tracker' for charitable impact.",
    creators: "Micro-influencers in sustainability, travel, and social justice spaces",
    formats: "TikTok series, Instagram Stories, interactive web experience",
  },
  {
    title: "Not Your Nan's Charity",
    description: "A bold rebrand campaign that acknowledges WaterAid's legacy while introducing a new visual identity and voice. Self-aware, funny, and unapologetic about being different.",
    creators: "Gen Z comedians, satirical content creators, design influencers",
    formats: "YouTube Shorts, TikTok, OOH in university cities",
  },
  {
    title: "87p",
    description: "A transparency-first campaign built around the fact that 87p of every pound reaches programs. Break down exactly what different donation amounts achieve with forensic precision.",
    creators: "Finance/money TikTokers, data visualization creators",
    formats: "Interactive calculator, short-form explainers, LinkedIn thought leadership",
  },
];

export const mockStats = {
  sentimentScore: 3.2,
  totalMentions: 2847,
  sourceMix: { reddit: 38, trustpilot: 22, twitter: 20, other: 20 },
  timeframe: "Last 12 months",
};
