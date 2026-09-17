export interface Works {
  name: string;
  duration: string;
  description: string;
  bullets?: string[];
  link: string;
}

export const workData: Works[] = [
  {
    name: "belo - Technical Product Manager",
    duration: "Feb 2026 - Present",
    description:
      "Own the roadmap and OKRs for the cross-border payments squad of a regulated fintech with 3.5M+ users. My OKR format became the company standard for every squad.",
    bullets: [
      "Found a ~50% drop in the take rate of a payment rail that nobody had flagged; the analysis triggered the pricing review.",
      "Caught a revenue metric that was off by 96% (wrong source table), found the right source and documented it company-wide.",
      "Stopped a four-year analytics contract priced at twice the incumbent tool and led the evaluation of alternatives.",
      "Took a new-country payment integration from kickoff to internal release in 11 days, with account opening in about 4 seconds.",
      "Turned a one-off regulatory requirement into a reusable localization capability, shipped the same day.",
      "Run planning and architecture decisions for a squad without a tech lead.",
    ],
    link: "https://www.belo.app",
  },
  {
    name: "belo - Frontend & Mobile Lead",
    duration: "Feb 2022 - Feb 2026",
    description:
      "Led the frontend and mobile teams of a fintech operating in several countries, from the first React Native commit to a team running two app stores.",
    bullets: [
      "Led the rewrite of the belo app from Flutter to React Native: 3.5M users, five months.",
      "Built and managed the frontend and mobile teams: hiring, 1:1s, performance reviews, mentoring.",
      "Owned mobile architecture and performance on iOS and Android.",
      "Shipped the web side too: SEO, the BeloPay transaction web app and an internal compliance dashboard.",
    ],
    link: "https://www.belo.app",
  },
  {
    name: "i1n (side project)",
    duration: "Feb 2026 - Present",
    description:
      "Localization infrastructure for React and React Native stacks that decouples translation management from deploy cycles. Solo: product, backend, frontend, CLI and npm package.",
    link: "https://i1n.ai",
  },
  {
    name: "Navent",
    duration: "May 2021 - Jan 2022",
    description:
      "Frontend developer on Zonaprop and Imovelweb, high-traffic real estate platforms built with React. Worked in agile teams on user experience and performance.",
    link: "https://www.navent.com/",
  },
  {
    name: "Aconpy",
    duration: "Feb 2021 - May 2021",
    description:
      "Sole frontend developer of Paiddly, a virtual wallet. Owned the project from the first line of code to design decisions and deployment.",
    link: "https://www.aconpy.com/",
  },
];
