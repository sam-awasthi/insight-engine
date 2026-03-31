export interface CharityProfile {
  name: string;
  tagline: string;
  founded: number;
  headquarters: string;
  mission: string;
  vision: string;
  reach: string;
  countries: number;
  peopleReached: string;
  website: string;
  keyMessages: KeyMessage[];
  audienceInsights: AudienceInsight[];
  toneGuidelines: ToneGuideline[];
}

export interface KeyMessage {
  id: string;
  pillar: string;
  headline: string;
  supportingCopy: string;
  emotionalHook: string;
  proofPoint: string;
}

export interface AudienceInsight {
  segment: string;
  motivation: string;
  barrier: string;
}

export interface ToneGuideline {
  attribute: string;
  doThis: string;
  notThis: string;
}

export const mockCharityProfile: CharityProfile = {
  name: "WaterAid",
  tagline: "Clean water. Decent toilets. Good hygiene.",
  founded: 1981,
  headquarters: "London, UK",
  mission: "To transform lives by improving access to clean water, decent toilets and good hygiene in the world's poorest communities.",
  vision: "A world where everyone, everywhere has access to clean water, decent toilets and good hygiene.",
  reach: "34 million people reached since 2015",
  countries: 26,
  peopleReached: "34M+",
  website: "wateraid.org",
  keyMessages: [
    {
      id: "km1",
      pillar: "Transparency & Impact",
      headline: "Every pound has a GPS pin.",
      supportingCopy: "We don't just promise impact — we prove it. 87p of every pound goes directly to programmes. Track your donation from your phone to a village well.",
      emotionalHook: "You deserve to see exactly where your money goes.",
      proofPoint: "87p of every £1 reaches programmes directly. Over 34 million people reached since 2015.",
    },
    {
      id: "km2",
      pillar: "Systems Change",
      headline: "We don't just build wells. We build systems.",
      supportingCopy: "Anyone can drill a borehole. We build the infrastructure, train local teams, and shape government policy to keep water flowing for generations — not just news cycles.",
      emotionalHook: "When the cameras leave, we stay.",
      proofPoint: "Active in 26 countries with government-level policy partnerships. 40+ years of sustained impact.",
    },
    {
      id: "km3",
      pillar: "Cultural Relevance",
      headline: "This isn't your nan's charity.",
      supportingCopy: "Same mission. New energy. Clean water is the most foundational issue on the planet — and we're showing up in a way that matches the urgency.",
      emotionalHook: "Clean water isn't a boomer issue. It's THE issue.",
      proofPoint: "Water underpins 6 of the 17 UN Sustainable Development Goals.",
    },
    {
      id: "km4",
      pillar: "Empowerment over Guilt",
      headline: "Join what's winning — not what's breaking.",
      supportingCopy: "We're done with sad piano music. You're not saving anyone — you're joining a movement that's already delivering results. Be part of the progress report.",
      emotionalHook: "Feel powerful, not guilty.",
      proofPoint: "785 million people still lack basic water access. But the number is falling — fast.",
    },
    {
      id: "km5",
      pillar: "Participation",
      headline: "Don't just donate. Participate.",
      supportingCopy: "Follow your impact. Share the story. Challenge your mates. This isn't passive giving — it's active change-making built for how your generation actually engages.",
      emotionalHook: "Your donation is the beginning, not the end.",
      proofPoint: "Donor-tracked impact stories have 3x higher sharing rates than traditional charity updates.",
    },
  ],
  audienceInsights: [
    {
      segment: "Gen Z (18–25)",
      motivation: "Want to feel like active participants, not passive donors. Value transparency and cultural alignment.",
      barrier: "Perceive WaterAid as outdated, guilt-driven, and indistinguishable from other water charities.",
    },
    {
      segment: "Young Professionals (25–35)",
      motivation: "Seek credible, data-backed causes they can champion in professional and social circles.",
      barrier: "Overwhelmed by charity options; need clear differentiation and proof of systemic impact.",
    },
    {
      segment: "Existing Donors (45+)",
      motivation: "Loyal, mission-aligned, trust-driven. Respond to stories of individual impact.",
      barrier: "May resist tonal shift; need reassurance that the mission hasn't changed.",
    },
  ],
  toneGuidelines: [
    { attribute: "Voice", doThis: "Bold, direct, human", notThis: "Corporate, formal, distant" },
    { attribute: "Emotion", doThis: "Empowerment, agency, pride", notThis: "Guilt, pity, sadness" },
    { attribute: "Proof", doThis: "Specific data, GPS pins, names", notThis: "Vague stats, generic claims" },
    { attribute: "Energy", doThis: "Urgent, confident, forward-looking", notThis: "Passive, cautious, backward-looking" },
    { attribute: "Format", doThis: "Creator-native, vertical, fast-paced", notThis: "TV ad style, slow, polished" },
  ],
};
