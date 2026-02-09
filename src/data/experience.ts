// ============================================================
// Experience Data — Work history in reverse chronological order
// To add a new role: add a new object at the START of the array
// ============================================================

export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  badge?: string;        // optional highlight badge (e.g. "TÜBİTAK Funded")
  bullets: string[];
}

export const experience: Experience[] = [
  {
    title: "Head of AI",
    company: "Sofkar — AI-Powered Software Startup",
    period: "2024 – Present",
    badge: "TÜBİTAK BİGG Funded (₺1M)",
    bullets: [
      "Leading all technical development of an NLP-driven data analytics platform that converts natural language queries into SQL, enabling non-technical users to interact with databases through conversational input.",
      "Architected the product's core RAG pipeline integrating LLM-based query generation, schema-aware context retrieval, and automated data visualization.",
      "Built and managing a cross-functional AI engineering team of 4, overseeing hiring, task allocation, and technical direction from prototype to product.",
    ],
  },
  {
    title: "Data Science Mentor",
    company: "Freelance",
    period: "2024 – Present",
    bullets: [
      "Mentoring aspiring data scientists in Python, machine learning, feature engineering, and CRM analytics, guiding them from foundational to advanced level through hands-on project-based training.",
    ],
  },
  {
    title: "Data Scientist",
    company: "Adana ASKI General Directorate — Ceyhan Wastewater Treatment & Biogas Plant",
    location: "Adana, Turkey",
    period: "2023 – Present",
    bullets: [
      "Developed a cloud-synced inventory management system (Python + Google Drive), replacing error-prone Excel tracking and reducing stock discrepancies by 90%.",
      "Built a digital procurement request tracking system with automated email notifications, cutting manual follow-up phone traffic by 90%.",
      "Performed predictive modeling and data visualization to support sustainable management goals.",
      "Created the WWTP Engineering Benchmark on Kaggle, evaluating 18 LLMs on 10 real-world wastewater engineering tasks.",
    ],
  },
  {
    title: "Plant Manager",
    company: "Adana ASKI General Directorate — Ceyhan Wastewater Treatment & Biogas Plant",
    location: "Adana, Turkey",
    period: "2016 – 2023",
    bullets: [
      "Managed full operations of a WWTP serving 91,000+ population equivalents (34,896 m³/day capacity), including mechanical treatment, biological nutrient removal, sludge processing, and biogas cogeneration.",
      "Oversaw control and commissioning of 3 treatment plants ensuring regulatory compliance. Led cross-functional teams managing budgets and coordinating with municipal authorities.",
    ],
  },
  {
    title: "Maintenance Specialist",
    company: "Adana ASKI General Directorate — Ceyhan WWTP",
    location: "Adana, Turkey",
    period: "2015 – 2016",
    bullets: [
      "Handled equipment maintenance, pump repairs, and machinery operation; gained hands-on knowledge of process control and SCADA system operation.",
    ],
  },
];
