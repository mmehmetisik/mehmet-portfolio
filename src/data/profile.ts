// ============================================================
// Profile Data — Single source of truth for personal information
// To update: simply change the values below
// ============================================================

export const profile = {
  name: "Mehmet Işık",
  title: "Data Scientist & Machine Learning Engineer",
  tagline: "Turning 10+ years of industrial expertise into intelligent AI solutions",
  location: "Adana, Turkey",
  email: "mmehmetisik@hotmail.com",
  phone: "+90 545 440 62 08",
  about: [
    "Data Scientist with 10+ years of industrial plant management experience, now specializing in Machine Learning, NLP, and GenAI. Currently leading AI product development at a TÜBİTAK-funded startup, building an NLP-driven data analytics platform.",
    "What sets me apart is the rare combination of deep domain expertise in wastewater treatment and environmental engineering with advanced data science capabilities. I don't just build models — I design and deploy real-world applications that solve actual operational problems.",
    "From AI-powered inventory systems reducing stock discrepancies by 90%, to multi-LLM benchmark studies evaluating 18 frontier models, to real-time IoT data pipelines — I bring engineering discipline to data science.",
  ],
  // Social links — add or remove as needed
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/mehmetisik4601", icon: "linkedin" },
    { platform: "GitHub", url: "https://github.com/mmehmetisik", icon: "github" },
    { platform: "Kaggle", url: "https://kaggle.com/mehmetisik", icon: "kaggle" },
    { platform: "Medium", url: "https://medium.com/@mmehmetisik", icon: "medium" },
  ],
} as const;
