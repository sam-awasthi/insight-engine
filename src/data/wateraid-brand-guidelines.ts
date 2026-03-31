import type { DesiredOutcome } from "./wateraid-mock";

export interface BrandGuideline {
  outcomeId: string;
  outcomeStatement: string;
  visualDirection: {
    primaryColor: string;
    primaryHex: string;
    supportingPalette: { name: string; hex: string; usage: string }[];
    typography: { heading: string; body: string; accent: string };
    imageStyle: string;
    iconStyle: string;
  };
  toneOfVoice: {
    personality: string[];
    doSay: string[];
    dontSay: string[];
    sampleHeadline: string;
  };
  messagingFramework: {
    tagline: string;
    elevatorPitch: string;
    proofPoints: string[];
  };
  channelApplication: {
    social: string;
    web: string;
    print: string;
  };
}

export const brandGuidelines: BrandGuideline[] = [
  {
    outcomeId: "d1",
    outcomeStatement: "Users want to see exactly where their money goes",
    visualDirection: {
      primaryColor: "WaterAid Blue",
      primaryHex: "#0057B8",
      supportingPalette: [
        { name: "Trust White", hex: "#FFFFFF", usage: "Backgrounds, breathing room, clarity" },
        { name: "Evidence Green", hex: "#00A86B", usage: "Progress indicators, success states, verified badges" },
        { name: "Data Slate", hex: "#2D3748", usage: "Data labels, stats, numerical displays" },
        { name: "GPS Pin Red", hex: "#E4002B", usage: "Location markers, CTAs, urgency moments" },
      ],
      typography: { heading: "Helvetica Neue Bold — clean, authoritative", body: "Helvetica Neue Regular — readable, trustworthy", accent: "Helvetica Neue Medium — data callouts and stats" },
      imageStyle: "Satellite/map imagery, GPS-style overlays, before-and-after splits. Real photography with subtle data-layer overlays. Always authentic — never staged.",
      iconStyle: "Outlined, geometric, precision-focused. Pin markers, flow diagrams, progress rings.",
    },
    toneOfVoice: {
      personality: ["Precise", "Transparent", "Confident"],
      doSay: ["Here's exactly where your £20 went", "Track your impact in real time", "87p of every pound reaches programs"],
      dontSay: ["Trust us", "Your donation matters", "Every little helps"],
      sampleHeadline: "Your £20. Village of Nampula. Well #4,217. Built March 2024.",
    },
    messagingFramework: {
      tagline: "See Where It Goes.",
      elevatorPitch: "WaterAid gives you forensic-level transparency on every donation — GPS pins, real-time project tracking, and verified impact data so you never wonder if your money made a difference.",
      proofPoints: ["Live project tracker with GPS coordinates", "87p of every £1 reaches programs directly", "Annual audited impact reports for every funded region"],
    },
    channelApplication: {
      social: "Interactive Stories with live donation trackers. Map-based Reels showing pin drops as wells are built. Creator partnerships for 'follow my donation' journeys.",
      web: "Dashboard-style impact page. Real-time counters. Individual project deep-dives with photos, GPS, and community profiles.",
      print: "Infographic-led designs with QR codes linking to live impact data. Minimal text, maximum evidence.",
    },
  },
  {
    outcomeId: "d2",
    outcomeStatement: "Users want to feel proud sharing their support",
    visualDirection: {
      primaryColor: "WaterAid Blue",
      primaryHex: "#0057B8",
      supportingPalette: [
        { name: "Electric Cyan", hex: "#00D4FF", usage: "Social-first highlights, share buttons, badges" },
        { name: "Gen Z Coral", hex: "#FF6B6B", usage: "Reaction moments, celebration states, viral hooks" },
        { name: "Clean White", hex: "#FFFFFF", usage: "Card backgrounds, breathing space" },
        { name: "Deep Navy", hex: "#001A3A", usage: "Premium feel, contrast backgrounds, text" },
      ],
      typography: { heading: "Helvetica Neue Bold — punchy, share-worthy", body: "Helvetica Neue Regular — scroll-friendly", accent: "Helvetica Neue Black — impact numbers, badges" },
      imageStyle: "Creator-native aesthetic. UGC-style photography. Bold type overlays on candid shots. Phone-screen mockups showing shareable moments.",
      iconStyle: "Filled, rounded, social-media native. Share arrows, badge icons, trophy/star shapes.",
    },
    toneOfVoice: {
      personality: ["Bold", "Proud", "Community-driven"],
      doSay: ["Flex your impact", "Join 50K people who actually do something", "Share this. Seriously."],
      dontSay: ["Please help", "Be grateful", "The least you can do"],
      sampleHeadline: "You funded clean water for 12 families. Yeah, you did that.",
    },
    messagingFramework: {
      tagline: "Worth Sharing.",
      elevatorPitch: "Supporting WaterAid isn't just generous — it's a statement. Shareable impact badges, creator collabs, and a community of people who put their money where their values are.",
      proofPoints: ["Personalised impact badges for social sharing", "Creator-led campaigns you actually want to repost", "A growing community of 50K+ active Gen Z supporters"],
    },
    channelApplication: {
      social: "Shareable impact cards auto-generated after donations. Creator duets and collabs. 'I funded clean water' profile badges and frames.",
      web: "Social-proof-heavy landing pages. Donor leaderboards. Shareable impact stories with one-click posting.",
      print: "Sticker packs, event wristbands, and merch that people actually want to wear. QR-to-share integration.",
    },
  },
  {
    outcomeId: "d3",
    outcomeStatement: "Users want quick, digestible proof of impact",
    visualDirection: {
      primaryColor: "WaterAid Blue",
      primaryHex: "#0057B8",
      supportingPalette: [
        { name: "Signal Yellow", hex: "#FFD100", usage: "Highlight callouts, key stats, attention grabbers" },
        { name: "Pure White", hex: "#FFFFFF", usage: "Clean card backgrounds, data readability" },
        { name: "Graphite", hex: "#4A5568", usage: "Secondary text, supporting data, labels" },
        { name: "Success Teal", hex: "#0EA5E9", usage: "Chart accents, progress bars, micro-interactions" },
      ],
      typography: { heading: "Helvetica Neue Bold — scannable, immediate", body: "Helvetica Neue Light — airy, fast reading", accent: "Helvetica Neue Bold — oversized stat numbers" },
      imageStyle: "Data-forward. Clean charts, bold stat callouts, single-metric hero moments. Photography used sparingly — let numbers tell the story.",
      iconStyle: "Minimal, line-weight consistent. Checkmarks, bar charts, speedometer-style gauges.",
    },
    toneOfVoice: {
      personality: ["Snappy", "Evidence-based", "Respectful of time"],
      doSay: ["30 seconds. That's all you need.", "The number: 28.6 million people reached", "One stat. One story. One action."],
      dontSay: ["Read our 80-page annual report", "It's complicated", "There's so much to cover"],
      sampleHeadline: "28.6M people. Clean water. Because of people like you.",
    },
    messagingFramework: {
      tagline: "Impact at a Glance.",
      elevatorPitch: "WaterAid delivers proof of impact in the time it takes to scroll past. Big numbers, real stories, zero fluff — because your attention is valuable and so is your money.",
      proofPoints: ["Single-stat impact summaries updated monthly", "30-second video impact reports", "One-tap donation receipts with instant outcome data"],
    },
    channelApplication: {
      social: "Carousel posts with one stat per slide. 15-second Reels with a single powerful number + context. Animated counter Stories.",
      web: "Above-the-fold impact counter. Expandable stat cards. 'Your impact in 10 seconds' micro-experience.",
      print: "Single-stat posters. Bold number + one sentence. QR code to full data for those who want depth.",
    },
  },
  {
    outcomeId: "d4",
    outcomeStatement: "Users want to participate, not just donate",
    visualDirection: {
      primaryColor: "WaterAid Blue",
      primaryHex: "#0057B8",
      supportingPalette: [
        { name: "Action Orange", hex: "#FF8C00", usage: "CTAs, participation prompts, event highlights" },
        { name: "Movement Purple", hex: "#7C3AED", usage: "Community features, group activities, challenges" },
        { name: "Canvas White", hex: "#FAFAFA", usage: "Interactive spaces, form backgrounds" },
        { name: "Deep Blue", hex: "#003580", usage: "Headers, footers, authority elements" },
      ],
      typography: { heading: "Helvetica Neue Bold — action-oriented, commanding", body: "Helvetica Neue Regular — inviting, conversational", accent: "Helvetica Neue Medium — button text, CTAs" },
      imageStyle: "Action shots. Hands building, people moving, communities gathering. Dynamic angles, motion blur, candid energy. Never passive — always mid-action.",
      iconStyle: "Dynamic, slightly rounded. Hands, tools, group silhouettes, challenge badges.",
    },
    toneOfVoice: {
      personality: ["Activating", "Inclusive", "Energetic"],
      doSay: ["Don't just donate — build", "You're not a wallet. You're a builder.", "Pick a challenge. Make it happen."],
      dontSay: ["Sit back and let us handle it", "Your money will do the work", "Leave it to the experts"],
      sampleHeadline: "Stop donating. Start building.",
    },
    messagingFramework: {
      tagline: "Build With Us.",
      elevatorPitch: "WaterAid doesn't want your passive donations. We want your energy, your skills, your network. Join challenges, track builds, vote on projects — because real change needs participants, not spectators.",
      proofPoints: ["Community challenges with real project outcomes", "Vote on which region gets the next project", "Skill-based volunteering matched to real needs"],
    },
    channelApplication: {
      social: "Challenge-based campaigns (fundraise by doing). Behind-the-scenes build Reels. Community voting polls for next project locations.",
      web: "Interactive project picker. Skill-matching volunteer portal. Challenge dashboard with live progress tracking.",
      print: "Event-focused collateral. Challenge kits with progress cards. Community meetup posters with QR sign-ups.",
    },
  },
  {
    outcomeId: "d5",
    outcomeStatement: "Users want modern, shareable content from charities",
    visualDirection: {
      primaryColor: "WaterAid Blue",
      primaryHex: "#0057B8",
      supportingPalette: [
        { name: "Neon Aqua", hex: "#00E5FF", usage: "Trending highlights, modern accents, digital-first elements" },
        { name: "Hot Pink", hex: "#FF1493", usage: "Viral moments, reaction triggers, Gen Z energy" },
        { name: "Ink Black", hex: "#0A0A0A", usage: "Contrast backgrounds, bold typography canvases" },
        { name: "Cloud White", hex: "#F8FAFC", usage: "Light mode cards, clean content spaces" },
      ],
      typography: { heading: "Helvetica Neue Black — editorial, high-impact", body: "Helvetica Neue Regular — platform-native readability", accent: "Helvetica Neue Bold Italic — pull quotes, captions" },
      imageStyle: "Creator-aesthetic. Vertical-first compositions. Lo-fi grain filters mixed with bold type. Meme-adjacent but purposeful. Raw footage over polished productions.",
      iconStyle: "Trendy, filled with gradients. Emoji-adjacent custom icons. Platform-specific sticker packs.",
    },
    toneOfVoice: {
      personality: ["Native", "Witty", "Unapologetic"],
      doSay: ["This isn't a charity ad (but also it kind of is)", "POV: you actually care about something", "No sad pianos. Just facts."],
      dontSay: ["Dear valued supporter", "In these challenging times", "Won't you please consider"],
      sampleHeadline: "Your nan's favourite charity just went viral.",
    },
    messagingFramework: {
      tagline: "Made for Your Feed.",
      elevatorPitch: "WaterAid creates content you'd actually share — not because you feel guilty, but because it's genuinely good. Creator collabs, meme-worthy moments, and stories that belong on your feed.",
      proofPoints: ["Content created with Gen Z creators, not ad agencies", "Platform-native formats (vertical, raw, fast)", "Monthly content drops designed for sharing, not lecturing"],
    },
    channelApplication: {
      social: "Creator-first content calendar. Duet-friendly formats. Meme templates with WaterAid data baked in. TikTok series with narrative arcs.",
      web: "Content hub styled like a creator portfolio. Embeddable widgets for blogs/newsletters. RSS-style feed of latest drops.",
      print: "Limited edition zines. Street-poster campaigns in uni cities. Sticker drops at festivals and events.",
    },
  },
];
