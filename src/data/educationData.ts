import ntiLogo from "../assets/logos/nti-logo.png";
import suLogo from "../assets/logos/stockholm-university-logo.png";
import tullingeLogo from "../assets/logos/tullinge-gymnasium-logo.png";

export const educationItems = [
  {
    date: "2022 - 2025",
    title: "Data- och systemvetenskap",
    organisation: "Stockholms Universitet",
    description: [
      "Data- och systemvetenskapligt kandidatprogram.",
      "Kurser i objektorienterad programmering, programmering för mobiler och webb, prototyputveckling, sökmotorer, beslutstödssystem, informationssäkerhet, databasmetodik och mer!",
      "Betyg: 3.9/4.0 (GPA)."
    ],
    logo: suLogo,
  },
  {
    date: "03/2022 - 04/2022",
    title: "Programmering i C#",
    organisation: "NTI-skolan",
    description: [
      "Programmeringskurs i C-sharp (C#)."
    ],
    logo: ntiLogo,
  },
  {
    date: "2018 - 2021",
    title: "Ekonomi, inriktning juridik",
    organisation: "Tullinge Gymnasium",
    description: [
      "Ämnen i företagsekonomi, privatjuridik, affärsjuridik och mera.",
      "Vinnare av årets bästa gymnasiearbete 🏆"
    ],
    logo: tullingeLogo,
  },
];
