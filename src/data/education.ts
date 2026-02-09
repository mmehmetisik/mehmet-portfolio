// ============================================================
// Education & Certifications Data
// To add: append to the relevant array
// ============================================================

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  provider: string;
  year: string;
}

export const education: Education[] = [
  {
    degree: "Micro MBA — Business & Personal / Financial Services Marketing Operations",
    institution: "Istanbul Technical University",
    period: "2021 – 2022",
  },
  {
    degree: "B.Sc. in Mechanical Engineering",
    institution: "Karabük University, Turkey",
    period: "2009 – 2014",
    details: "GPA: 3.14/4.00 | Erasmus Exchange: Koszalin University of Technology, Poland (2012)",
  },
];

export const certifications: Certification[] = [
  { name: "Deep Learning", provider: "Miuul", year: "2025" },
  { name: "MLOps Bootcamp", provider: "VBO", year: "2025" },
  { name: "Generative AI & Prompt Engineering", provider: "VBO", year: "2024" },
  { name: "Data Engineering Bootcamp", provider: "VBO", year: "2024–2025" },
  { name: "Data Scientist & ML Bootcamp", provider: "Miuul", year: "2022–2023" },
  { name: "AWS Cloud Technical Bootcamp", provider: "Miuul", year: "2023" },
  { name: "Data Engineer Path", provider: "Miuul", year: "2023" },
];
