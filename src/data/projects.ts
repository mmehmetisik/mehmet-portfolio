// ============================================================
// Projects Data — Portfolio projects
// To add a new project: add a new object to the array
// Each project has tags for filtering and links for external resources
// ============================================================

export interface Project {
  title: string;
  subtitle: string;          // short tech stack or context
  description: string;       // 2-3 sentence description
  tags: string[];            // technology tags for filtering
  category: ProjectCategory;
  year: string;
  links?: {
    github?: string;
    kaggle?: string;
    medium?: string;
    demo?: string;
  };
  highlights?: string[];     // key metrics or achievements
}

export type ProjectCategory =
  | "GenAI & LLM"
  | "Machine Learning"
  | "Data Engineering"
  | "AI Applications"
  | "Cloud & Pipeline"
  | "NLP"
  | "Data Science";

export const projectCategories: ProjectCategory[] = [
  "GenAI & LLM",
  "Machine Learning",
  "Data Engineering",
  "AI Applications",
  "Cloud & Pipeline",
  "NLP",
  "Data Science",
];

export const projects: Project[] = [
  // ── GenAI & LLM ──────────────────────────────────────────
  {
    title: "WWTP Autonomous Management Benchmark",
    subtitle: "Multi-LLM Agent Architecture — Research Project",
    description:
      "Designed a novel benchmark testing whether AI agents can autonomously manage wastewater plant emergencies. Evaluated 7 frontier LLMs across 10 real-world emergency scenarios with 120+ evaluations.",
    tags: ["Claude", "Gemini", "Qwen", "DeepSeek", "Multi-Agent", "Benchmark"],
    category: "GenAI & LLM",
    year: "2025",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["7 frontier LLMs evaluated", "92% Grade A performance", "120+ evaluations"],
  },
  {
    title: "WWTP Engineering Benchmark",
    subtitle: "18 LLMs on Domain-Specific Tasks",
    description:
      "Created a comprehensive benchmark evaluating 18 frontier LLMs on 10 real-world wastewater engineering tasks derived from hands-on operational experience.",
    tags: ["LLM", "Benchmark", "Domain-Specific", "Kaggle"],
    category: "GenAI & LLM",
    year: "2025",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["18 LLMs tested", "10 engineering tasks", "Published on Kaggle"],
  },

  // ── AI Applications ──────────────────────────────────────
  {
    title: "Smart API Agent",
    subtitle: "Streamlit, Groq API, Multi-Platform AI",
    description:
      "Built an intelligent agent that converts natural language to API calls, enabling users to interact with APIs without technical knowledge.",
    tags: ["Streamlit", "Groq API", "NLP", "Agent"],
    category: "AI Applications",
    year: "2025",
    links: { github: "https://github.com/mmehmetisik" },
  },
  {
    title: "Data Insight Agent",
    subtitle: "Automated CSV Analysis with AI Planning",
    description:
      "AI-powered agent that automatically analyzes uploaded CSV files, generates insights, and creates visualizations through conversational interaction.",
    tags: ["Streamlit", "AI Agent", "Data Analysis", "Visualization"],
    category: "AI Applications",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
  },
  {
    title: "SQL Insight Agent",
    subtitle: "Natural Language to SQL Queries",
    description:
      "Conversational AI agent that converts natural language questions into SQL queries, making database interaction accessible to non-technical users.",
    tags: ["SQL", "NLP", "Streamlit", "AI Agent"],
    category: "AI Applications",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
  },
  {
    title: "AI Image Variations Generator",
    subtitle: "Hugging Face, 6 AI Platforms",
    description:
      "Generates multiple artistic variations of uploaded images using 6 different AI platforms, deployed as an interactive Streamlit web application.",
    tags: ["Hugging Face", "Image AI", "Streamlit", "Multi-Platform"],
    category: "AI Applications",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
  },
  {
    title: "AI Text Generation Studio",
    subtitle: "Multi-Model Text Generation",
    description:
      "Interactive studio for generating and comparing text outputs from multiple AI models, with customizable parameters and prompt engineering tools.",
    tags: ["Text Generation", "LLM", "Streamlit", "Prompt Engineering"],
    category: "AI Applications",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
  },

  // ── Machine Learning ─────────────────────────────────────
  {
    title: "Higgs Boson Detection with ML",
    subtitle: "9-Layer Feature Engineering + CatBoost",
    description:
      "Built a comprehensive ML pipeline for CERN ATLAS particle detection. Designed 9 layers of feature engineering expanding from 28 to 100+ features. Achieved top-tier performance with CatBoost ensemble.",
    tags: ["CatBoost", "Feature Engineering", "SHAP", "Physics", "Kaggle"],
    category: "Machine Learning",
    year: "2025",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["28 → 100+ features", "9 layers of FE", "SHAP analysis"],
  },
  {
    title: "Titanic Survival Prediction",
    subtitle: "Complete ML Pipeline",
    description:
      "End-to-end machine learning pipeline with comprehensive EDA, feature engineering, and model comparison for the classic Titanic dataset.",
    tags: ["Classification", "EDA", "Feature Engineering", "Scikit-learn"],
    category: "Machine Learning",
    year: "2023",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
  },
  {
    title: "Diabetes EDA & ML Prediction",
    subtitle: "Classification with Multiple Models",
    description:
      "Comprehensive exploratory data analysis and predictive modeling for diabetes detection using multiple ML algorithms with hyperparameter tuning.",
    tags: ["Classification", "EDA", "Healthcare", "Scikit-learn"],
    category: "Machine Learning",
    year: "2023",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
  },
  {
    title: "Telecom Churn Prediction",
    subtitle: "ML Models Comparison",
    description:
      "Built and compared multiple ML models for predicting customer churn in telecom, including logistic regression, random forest, and gradient boosting.",
    tags: ["Classification", "Churn", "Ensemble", "Business"],
    category: "Machine Learning",
    year: "2023",
  },
  {
    title: "Baseball Salary Prediction",
    subtitle: "Regression Analysis",
    description:
      "Regression analysis predicting baseball player salaries based on performance statistics with feature selection and model optimization.",
    tags: ["Regression", "Feature Selection", "Sports Analytics"],
    category: "Machine Learning",
    year: "2023",
  },
  {
    title: "Medical Insurance Cost Prediction",
    subtitle: "Regression with Feature Engineering",
    description:
      "Predicting medical insurance costs using regression techniques with comprehensive feature engineering and model comparison.",
    tags: ["Regression", "Healthcare", "Feature Engineering"],
    category: "Machine Learning",
    year: "2023",
  },
  {
    title: "Car Price Prediction System",
    subtitle: "End-to-End ML Pipeline",
    description:
      "Complete machine learning system for predicting car prices with data preprocessing, feature engineering, and model deployment.",
    tags: ["Regression", "Pipeline", "Feature Engineering"],
    category: "Machine Learning",
    year: "2023",
  },

  // ── Data Engineering ─────────────────────────────────────
  {
    title: "Real-Time IoT Sensor Data Analytics",
    subtitle: "Kafka, Spark, Elasticsearch, Kibana, Docker",
    description:
      "Implemented an end-to-end real-time data pipeline for IoT sensor data. Apache Kafka for streaming, Spark for processing, Elasticsearch + Kibana for dashboards, ML for activity prediction.",
    tags: ["Kafka", "Spark", "Elasticsearch", "Docker", "ML", "IoT"],
    category: "Data Engineering",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
    highlights: ["End-to-end pipeline", "Real-time ML predictions", "Full Docker deployment"],
  },
  {
    title: "Real-Time Cryptocurrency Analytics (AWS)",
    subtitle: "Binance API + AWS Kinesis + Redshift",
    description:
      "Cloud-native real-time data processing pipeline for cryptocurrency market analytics using AWS Kinesis, Redshift, and automated ETL workflows.",
    tags: ["AWS", "Kinesis", "Redshift", "Binance", "Real-Time"],
    category: "Cloud & Pipeline",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
  },
  {
    title: "AWS Cloud Data Analytics Pipeline",
    subtitle: "S3, Lambda, DynamoDB, Glue, QuickSight",
    description:
      "Designed and built 6 cloud-native data pipelines for analytics using various AWS services including Lambda triggers, Kinesis streaming, and Redshift warehousing.",
    tags: ["AWS", "Lambda", "S3", "DynamoDB", "QuickSight"],
    category: "Cloud & Pipeline",
    year: "2023",
    links: { github: "https://github.com/mmehmetisik" },
    highlights: ["6 cloud-native pipelines", "Multiple AWS services"],
  },

  // ── NLP & Sentiment ──────────────────────────────────────
  {
    title: "Amazon Reviews Sentiment Analysis",
    subtitle: "NLP + ML for Sales Insights",
    description:
      "Sentiment analysis pipeline for Amazon product reviews, extracting insights to boost sales through understanding customer sentiment patterns.",
    tags: ["NLP", "Sentiment Analysis", "Text Mining", "Business"],
    category: "NLP",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
  },
  {
    title: "Twitter Sentiment Analysis",
    subtitle: "Social Media NLP Pipeline",
    description:
      "Built a complete NLP pipeline for analyzing sentiment in Twitter data with text preprocessing, feature extraction, and classification.",
    tags: ["NLP", "Twitter", "Sentiment", "Classification"],
    category: "NLP",
    year: "2024",
  },
  {
    title: "Wikipedia Text Preprocessing & NLP",
    subtitle: "Text Mining & Visualization",
    description:
      "Comprehensive text preprocessing pipeline for Wikipedia articles with visualization and analysis for NLP applications.",
    tags: ["NLP", "Text Mining", "Visualization", "Preprocessing"],
    category: "NLP",
    year: "2024",
  },

  // ── Data Science ─────────────────────────────────────────
  {
    title: "RFM Analysis & Customer Segmentation",
    subtitle: "CRM Analytics — FLO",
    description:
      "Customer segmentation using RFM (Recency, Frequency, Monetary) analysis for FLO retail company, enabling targeted marketing strategies.",
    tags: ["RFM", "Segmentation", "CRM", "Business"],
    category: "Data Science",
    year: "2023",
  },
  {
    title: "CLTV Prediction with BG-NBD & Gamma-Gamma",
    subtitle: "Customer Lifetime Value Modeling",
    description:
      "Predicted customer lifetime value using BG-NBD and Gamma-Gamma models with customer segmentation for strategic business planning.",
    tags: ["CLTV", "BG-NBD", "Gamma-Gamma", "Segmentation"],
    category: "Data Science",
    year: "2023",
  },
  {
    title: "A/B Testing Analysis Platform",
    subtitle: "Statistical Testing & Experimentation",
    description:
      "Built a comprehensive A/B testing analysis platform covering hypothesis testing, statistical significance, and experiment design methodologies.",
    tags: ["A/B Testing", "Statistics", "Hypothesis Testing"],
    category: "Data Science",
    year: "2023",
  },
  {
    title: "Hybrid Recommender System",
    subtitle: "Content-Based + Collaborative Filtering",
    description:
      "Developed a hybrid recommendation system combining content-based and collaborative filtering approaches for improved recommendation quality.",
    tags: ["Recommender System", "Collaborative Filtering", "Content-Based"],
    category: "Data Science",
    year: "2023",
  },
  {
    title: "Airbnb NYC EDA & Price Prediction",
    subtitle: "Exploratory Analysis + ML",
    description:
      "Comprehensive EDA of Airbnb NYC listings with price prediction using machine learning, uncovering pricing patterns across neighborhoods.",
    tags: ["EDA", "Regression", "Visualization", "Airbnb"],
    category: "Data Science",
    year: "2023",
  },
  {
    title: "İş Bankası Menu Recommendation System",
    subtitle: "LightGBM + OneVsRestClassifier — Competition",
    description:
      "AI-based recommendation system for İş Bankası mobile app menu suggestions using LightGBM and OneVsRestClassifier.",
    tags: ["LightGBM", "Classification", "Recommendation", "Competition"],
    category: "Machine Learning",
    year: "2023",
  },
  {
    title: "iyzico E-Commerce Forecasting",
    subtitle: "XGBoost + Random Forests — Competition",
    description:
      "ML-driven merchant trend forecasting for iyzico e-commerce platform using XGBoost and Random Forests.",
    tags: ["XGBoost", "Random Forest", "Forecasting", "Competition"],
    category: "Machine Learning",
    year: "2023",
  },
];
