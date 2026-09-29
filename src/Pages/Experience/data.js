import EPAMLogo from "./../../assets/education/EPAM.webp";
import ashstoneLogo from "./../../assets/pics/ashtone.webp";
import CognaizeLogo from "./../../assets/pics/cognaize-armenia.webp";

export const experienceData = [
  {
    id: 1,
    company: "EPAM Systems",
    logo: EPAMLogo,
    role: "Software Engineer",
    duration: "July 2025 - Present",
    type: "Full-time",
    companyDescription:
      "EPAM Systems, Inc. delivers software engineering and digital platform solutions for global enterprises, serving millions of users worldwide.",
    projectDescription:
      "Building the HFM Client Area for HF Markets Group — the client portal for a global forex/CFD brokerage. A large-scale Next.js (App Router) frontend in TypeScript, React, and Tailwind CSS with an internal design system, SSR, and a 2700+ test suite.",
    note: "Earlier in this role I contributed to EPAM's corporate websites (epam.com and regional/product sites) on the AEM platform, resolving 40+ UI issues and writing Sinon.js unit tests for 20+ frontend modules. I then worked on the Ketcher Life Sciences platform (~3 months) before moving to the HF Markets client area.",
    highlights: [
      "Resolved a wide range of UI/UX bugs across the client area — navigation, modals/drawers/dropdowns, overflow and positioning, and layout fixes to match Figma designs",
      "Implemented feature enhancements in marketing tools, asset pages, account manager cards, search, widgets, and the AI assistant",
      "Built responsive/mobile UI (bottom sheets, skeleton loaders) with Next.js, React, TypeScript, Tailwind CSS, and the internal UIKit",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    link: "https://www.epam.com/",
    linkText: "Visit EPAM",
    contributions: [
      {
        icon: "🐞",
        title: "UI/UX Bug Fixing",
        points: [
          "Resolved navigation active-state, modal/drawer/dropdown behavior, overflow, and positioning bugs across the client area",
          "Fixed layout and alignment issues to match Figma designs",
        ],
      },
      {
        icon: "✨",
        title: "Feature Development",
        points: [
          "Enhanced marketing tools and asset pages with search filters and data display formatting",
          "Built out account manager cards, search, widgets, and the AI assistant",
        ],
      },
      {
        icon: "📱",
        title: "Responsive & Role-Based UI",
        points: [
          "Built responsive/mobile UI (bottom sheets, spacing, skeleton loaders) with Next.js, React, TypeScript, Tailwind, and the UIKit",
          "Worked across role-based flows for traders, affiliates, CPAs, and campaign managers, respecting access rules and code patterns",
        ],
      },
      {
        icon: "🔀",
        title: "Quality & Git Workflow",
        points: [
          "Verified every change via type-checking, linting, the automated test suite, and local browser testing before delivery",
          "Iterated through GitLab merge requests on reviewer and AI-assisted (GitLab Duo) feedback; kept branches in sync and resolved conflicts",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Ashstone Studios",
    logo: ashstoneLogo,
    role: "Frontend (Shopify) Developer",
    duration: "June 2024 - December 2025",
    type: "Full-time",
    companyDescription:
      "Ashstone Studios is a creative agency specializing in e-commerce solutions and digital marketing, developing high-end premium Shopify themes for modern commerce.",
    projectDescription:
      "Developed and maintained Shopify-based e-commerce websites, ensuring functionality, performance, and user experience. Collaborated with clients to implement new features and resolve bugs, ensuring seamless operation and satisfaction.",
    note: "Concurrent with my EPAM role for 6 months (July 2025 - December 2025).",
    highlights: [
      "Published 3 Shopify themes on the official Theme Store, with Motto earning 20+ positive reviews",
      "Resolved 30+ client support requests and delivered features for international e-commerce brands",
    ],
    tech: ["Shopify", "Liquid", "JavaScript", "SCSS", "Tailwind"],
    links: [
      {
        url: "https://themes.shopify.com/themes/motto/presets/motto",
        text: "Motto Theme",
      },
      {
        url: "https://themes.shopify.com/themes/monochrome/presets/monochrome",
        text: "Monochrome Theme",
      },
      {
        url: "https://themes.shopify.com/themes/force/presets/force",
        text: "Force Theme",
      },
    ],
    contributions: [
      {
        icon: "🛒",
        title: "Theme Development",
        points: [
          "Designed and published 3 custom Shopify themes on the official Theme Store",
          "Motto theme earned 20+ positive reviews; provided support and features for others",
        ],
      },
      {
        icon: "⚡",
        title: "Performance",
        points: [
          "Ensured responsive, user-friendly, and performance-optimized web design",
          "Optimized themes for seamless user experiences across devices",
        ],
      },
      {
        icon: "🔧",
        title: "Client Support",
        points: [
          "Resolved 30+ client requests addressing user feedback and technical challenges",
          "Debugged and troubleshot technical issues to improve website functionality",
        ],
      },
      {
        icon: "🎨",
        title: "E-Commerce Design",
        points: [
          "Collaborated with design and content teams to implement and enhance features",
          "Built responsive e-commerce themes using Liquid, JavaScript, HTML/CSS",
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Cognaize",
    logo: CognaizeLogo,
    role: "Software Engineer",
    duration: "February 2023 - March 2024",
    type: "Full-time",
    companyDescription:
      "Cognaize automates unstructured data with Hybrid Intelligence. The company's products empower some of the world's largest banks, ratings agencies, investment firms, and insurance companies with high-quality data.",
    projectDescription:
      "Automated the processing and analysis of unstructured financial data by implementing a hybrid intelligence approach. Leveraged advanced AI techniques and human expertise to extract, organize, and interpret complex financial information, enhancing decision-making accuracy and operational efficiency.",
    highlights: [
      "Implemented 50+ features and resolved 50+ production bugs on AI-powered platform",
      "Refactored legacy code increasing maintainability by ~15%",
    ],
    tech: ["React", "TypeScript", "Redux", "Python", "REST API"],
    link: "https://www.cognaize.com/",
    linkText: "Visit Cognaize",
    contributions: [
      {
        icon: "</>",
        title: "Feature Development",
        points: [
          "Collaborated with senior developers to implement 50+ new features",
          "Enhanced application functionality ensuring continuous product improvement",
        ],
      },
      {
        icon: "🔧",
        title: "Debugging & Refactoring",
        points: [
          "Diagnosed and resolved 50+ production bugs maintaining smooth operation",
          "Refactored legacy code increasing maintainability by ~15%",
        ],
      },
      {
        icon: "🎨",
        title: "UI Implementation",
        points: [
          "Executed design updates in alignment with UI best practices",
          "Worked closely with designers to ensure seamless integration",
        ],
      },
      {
        icon: "🤝",
        title: "Team Collaboration",
        points: [
          "Participated in team meetings providing project updates and strategic input",
          "Worked closely with backend developers ensuring end-to-end functionality",
        ],
      },
    ],
  },
  {
    id: 4,
    company: "Freelance & Own Projects",
    logo: null,
    role: "Self-Directed Developer",
    duration: "June 2022 - February 2023",
    type: "Freelance",
    compact: true,
    projectDescription:
      "Where it started — freelance work and self-directed learning. I built many of the apps below and grew into professional engineering.",
    portfolioLink: true,
  },
];
