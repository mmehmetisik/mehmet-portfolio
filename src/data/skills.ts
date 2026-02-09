// ============================================================
// Skills Data — Organized by category
// To add a new skill: find the right category, add to 'items' array
// To add a new category: add a new object to the array
// ============================================================

export interface SkillCategory {
  category: string;
  icon: string;       // emoji for visual flair
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming & Data",
    icon: "💻",
    items: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "SciPy"],
  },
  {
    category: "Machine Learning",
    icon: "🧠",
    items: [
      "Regression", "Classification", "Clustering",
      "Ensemble Methods (XGBoost, LightGBM, CatBoost)",
      "NLP", "Time Series", "Recommendation Systems",
    ],
  },
  {
    category: "Deep Learning & AI",
    icon: "🔬",
    items: ["TensorFlow", "Keras", "Neural Networks", "CNNs", "Sentiment Analysis", "SHAP", "Optuna"],
  },
  {
    category: "GenAI & LLM",
    icon: "🤖",
    items: [
      "Prompt Engineering", "Multi-Agent Architectures",
      "LLM Benchmarking", "Groq API", "RAG",
      "Streamlit AI Apps",
    ],
  },
  {
    category: "Cloud & Data Engineering",
    icon: "☁️",
    items: [
      "AWS (S3, Lambda, DynamoDB, Kinesis, Redshift, SQS, EC2, Glue, QuickSight)",
      "Apache Kafka", "Apache Spark", "Docker", "Elasticsearch",
    ],
  },
  {
    category: "Visualization & BI",
    icon: "📊",
    items: ["Matplotlib", "Seaborn", "Power BI", "Kibana", "Plotly"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    items: ["Git/GitHub", "Kaggle", "Streamlit", "SCADA Systems (WinCC)", "MLflow"],
  },
];
