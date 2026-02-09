// ============================================================
// Projects Data — Portfolio projects
// To add a new project: add a new object to the array
// Each project has tags for filtering and links for external resources
// ============================================================

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  year: string;
  links?: {
    github?: string;
    kaggle?: string;
    medium?: string;
    demo?: string;
  };
  highlights?: string[];
  featured?: boolean;
}

export type ProjectCategory =
  | "GenAI & LLM"
  | "Machine Learning"
  | "Data Engineering & Cloud"
  | "AI Applications"
  | "NLP"
  | "Data Science";

export const projectCategories: ProjectCategory[] = [
  "GenAI & LLM",
  "Machine Learning",
  "Data Engineering & Cloud",
  "AI Applications",
  "NLP",
  "Data Science",
];

export const projects: Project[] = [
  // == GenAI & LLM ==
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
    featured: true,
  },
  {
    title: "WWTP Engineering Benchmark",
    subtitle: "20+ LLMs on Domain-Specific Tasks",
    description:
      "Created a comprehensive benchmark evaluating 20+ frontier LLMs on 10 real-world wastewater engineering tasks derived from hands-on operational experience.",
    tags: ["LLM", "Benchmark", "Domain-Specific", "Kaggle"],
    category: "GenAI & LLM",
    year: "2025",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["20+ LLMs tested", "10 engineering tasks", "Published on Kaggle"],
    featured: true,
  },

  // == AI Applications ==
  {
    title: "Smart API Agent",
    subtitle: "Streamlit, Groq API, Multi-Platform AI",
    description:
      "Built an intelligent agent that converts natural language to API calls, enabling users to interact with APIs without technical knowledge.",
    tags: ["Streamlit", "Groq API", "NLP", "Agent"],
    category: "AI Applications",
    year: "2025",
    links: { github: "https://github.com/mmehmetisik" },
    featured: true,
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
    title: "AI Text-to-Image Generator",
    subtitle: "Multi-Model Image Generation",
    description:
      "Interactive application for generating images from text prompts using multiple AI models, with style customization and comparison features.",
    tags: ["Text-to-Image", "AI", "Streamlit", "Multi-Model"],
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

  // == Machine Learning ==
  {
    title: "Higgs Boson Detection with ML",
    subtitle: "9-Layer Feature Engineering + CatBoost",
    description:
      "Built a comprehensive ML pipeline for CERN ATLAS particle detection. Designed 9 layers of feature engineering expanding from 28 to 100+ features. Achieved top-tier performance with CatBoost ensemble.",
    tags: ["CatBoost", "Feature Engineering", "SHAP", "Physics", "Kaggle"],
    category: "Machine Learning",
    year: "2025",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["28 to 100+ features", "9 layers of FE", "SHAP analysis"],
    featured: true,
  },
  {
    title: "Emotion Recognition with Deep Learning",
    subtitle: "Keras + CNN — Image Classification",
    description:
      "Built a deep learning model using Keras and CNNs for recognizing human emotions from facial expressions, applying transfer learning and data augmentation techniques.",
    tags: ["Deep Learning", "Keras", "CNN", "Computer Vision"],
    category: "Machine Learning",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["CNN architecture", "Transfer learning"],
  },
  {
    title: "RNA 3D Structure Prediction Pipeline",
    subtitle: "Bioinformatics + Machine Learning",
    description:
      "Developed a computational pipeline for predicting RNA 3D structures using machine learning approaches, bridging bioinformatics and AI.",
    tags: ["Bioinformatics", "RNA", "Pipeline", "Prediction"],
    category: "Machine Learning",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["3D structure prediction", "Bioinformatics + AI"],
  },
  {
    title: "Titanic Survival Prediction",
    subtitle: "Complete ML Pipeline — 34-Step Masterclass",
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
    title: "Is Bankasi Menu Recommendation System",
    subtitle: "LightGBM + OneVsRestClassifier — Competition",
    description:
      "AI-based recommendation system for Is Bankasi mobile app menu suggestions using LightGBM and OneVsRestClassifier.",
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
  {
    title: "Data Science Salary Prediction",
    subtitle: "EDA + Regression — Score 0.93",
    description:
      "Exploratory data analysis and salary prediction for data science roles, achieving 0.93 prediction score with comprehensive feature analysis and visualization.",
    tags: ["Regression", "EDA", "Visualization", "Career Analytics"],
    category: "Machine Learning",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["0.93 prediction score"],
  },
  {
    title: "U.S. Farm Biogas ML Prediction",
    subtitle: "Environmental ML — 2 Studies",
    description:
      "Predicted biogas production potential from U.S. dairy cow and livestock farms using ML models, combining environmental engineering domain knowledge with data science.",
    tags: ["Regression", "Environmental", "Energy", "Domain Expertise"],
    category: "Machine Learning",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["2 prediction studies", "Domain expertise + ML"],
  },

  // == Data Engineering & Cloud ==
  {
    title: "Real-Time IoT Sensor Data Analytics",
    subtitle: "Kafka, Spark, Elasticsearch, Kibana, Docker",
    description:
      "Implemented an end-to-end real-time data pipeline for IoT sensor data. Apache Kafka for streaming, Spark for processing, Elasticsearch + Kibana for dashboards, ML for activity prediction.",
    tags: ["Kafka", "Spark", "Elasticsearch", "Docker", "ML", "IoT"],
    category: "Data Engineering & Cloud",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
    highlights: ["End-to-end pipeline", "Real-time ML predictions", "Full Docker deployment"],
    featured: true,
  },
  {
    title: "Kafka Message Processor",
    subtitle: "Stream Processing Pipeline",
    description:
      "Built a real-time message processing system using Apache Kafka for high-throughput stream data ingestion and transformation.",
    tags: ["Kafka", "Stream Processing", "Real-Time", "Python"],
    category: "Data Engineering & Cloud",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
  },
  {
    title: "Real-Time Cryptocurrency Analytics (AWS)",
    subtitle: "Binance API + AWS Kinesis + Redshift",
    description:
      "Cloud-native real-time data processing pipeline for cryptocurrency market analytics using AWS Kinesis, Redshift, and automated ETL workflows.",
    tags: ["AWS", "Kinesis", "Redshift", "Binance", "Real-Time"],
    category: "Data Engineering & Cloud",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
  },
  {
    title: "Real-Time Binance Data Pipeline",
    subtitle: "Automated Crypto Data Processing",
    description:
      "Automated data processing pipeline for real-time Binance cryptocurrency market data with scheduled ETL and data quality checks.",
    tags: ["Binance API", "ETL", "Automation", "Python"],
    category: "Data Engineering & Cloud",
    year: "2024",
    links: { github: "https://github.com/mmehmetisik" },
  },
  {
    title: "AWS Cloud Data Analytics Pipeline",
    subtitle: "S3, Lambda, DynamoDB, Glue, QuickSight",
    description:
      "Designed and built 6 cloud-native data pipelines for analytics using various AWS services including Lambda triggers, Kinesis streaming, and Redshift warehousing.",
    tags: ["AWS", "Lambda", "S3", "DynamoDB", "QuickSight"],
    category: "Data Engineering & Cloud",
    year: "2023",
    links: { github: "https://github.com/mmehmetisik" },
    highlights: ["6 cloud-native pipelines", "Multiple AWS services"],
  },
  {
    title: "AWS DynamoDB & SQS Data Projects",
    subtitle: "NoSQL + Message Queue — 2 Projects",
    description:
      "Built data insertion and processing pipelines using AWS DynamoDB for NoSQL storage and SQS for message queuing, implementing serverless architectures.",
    tags: ["DynamoDB", "SQS", "AWS", "Serverless", "NoSQL"],
    category: "Data Engineering & Cloud",
    year: "2023",
    links: { github: "https://github.com/mmehmetisik" },
    highlights: ["2 AWS projects", "Serverless architecture"],
  },
  {
    title: "ADANA ASKI Industrial Management Systems",
    subtitle: "Inventory & Request Tracking — 2 Systems",
    description:
      "Developed two real-world industrial management systems for Adana Water Authority: an inventory tracking system for warehouse management and a service request tracking system for operational workflows.",
    tags: ["Industrial IoT", "Management System", "Real-World", "Operations"],
    category: "Data Engineering & Cloud",
    year: "2023",
    links: { github: "https://github.com/mmehmetisik" },
    highlights: ["2 production systems", "Real-world deployment"],
    featured: true,
  },

  // == NLP ==
  {
    title: "Amazon Reviews Sentiment Analysis",
    subtitle: "NLP + ML for Sales Insights — 2 Projects",
    description:
      "Built two comprehensive sentiment analysis pipelines for Amazon product reviews using different NLP approaches, extracting actionable insights to boost sales.",
    tags: ["NLP", "Sentiment Analysis", "Text Mining", "Business"],
    category: "NLP",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["2 analysis projects", "Multiple NLP approaches"],
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

  // == Data Science ==
  {
    title: "Global Renewable Energy Analysis",
    subtitle: "17-Part EDA Series — Solar, Wind, Hydro, Biofuel, Geothermal",
    description:
      "Comprehensive 17-notebook analysis series examining global renewable energy trends across 5 major sectors. Covers production capacity, growth patterns, and regional comparisons with rich visualizations.",
    tags: ["EDA", "Visualization", "Energy", "Pandas", "Environmental"],
    category: "Data Science",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["17 notebooks", "5 energy sectors", "Global scope"],
  },
  {
    title: "Solar Power Generation Analysis",
    subtitle: "EDA & Visualization — 23 Comments",
    description:
      "Detailed exploratory analysis of solar power generation data with comprehensive visualizations, trend analysis, and performance metrics.",
    tags: ["EDA", "Solar Energy", "Visualization", "Pandas"],
    category: "Data Science",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["23 community comments"],
  },
  {
    title: "Analysis of Landfills in America",
    subtitle: "Environmental Data Science",
    description:
      "Data-driven analysis of landfill distribution, capacity, and environmental impact across the United States, combining environmental engineering domain knowledge with data science.",
    tags: ["EDA", "Environmental", "Visualization", "Geospatial"],
    category: "Data Science",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
  },
  {
    title: "General Review of Biogas in U.S. Farms",
    subtitle: "Environmental Analysis & Research",
    description:
      "Comprehensive data-driven review of biogas production potential across U.S. farms, analyzing production trends, regional patterns, and sustainability metrics.",
    tags: ["EDA", "Environmental", "Energy", "Research"],
    category: "Data Science",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
  },
  {
    title: "RFM Analysis & Customer Segmentation",
    subtitle: "CRM Analytics — 3 Projects",
    description:
      "Applied RFM (Recency, Frequency, Monetary) analysis across 3 different retail datasets including FLO, demonstrating versatile CRM analytics skills with varying segmentation strategies.",
    tags: ["RFM", "Segmentation", "CRM", "Business"],
    category: "Data Science",
    year: "2023",
    highlights: ["3 datasets analyzed", "Multiple segmentation strategies"],
  },
  {
    title: "CLTV Prediction & Customer Lifetime Value",
    subtitle: "BG-NBD & Gamma-Gamma — 3 Projects",
    description:
      "Predicted customer lifetime value using BG-NBD and Gamma-Gamma models across 3 projects including FLO retail, with customer segmentation for strategic business planning.",
    tags: ["CLTV", "BG-NBD", "Gamma-Gamma", "Segmentation"],
    category: "Data Science",
    year: "2023",
    highlights: ["3 CLTV projects", "Probabilistic modeling"],
  },
  {
    title: "A/B Testing & Statistical Experimentation",
    subtitle: "Hypothesis Testing Across Multiple Datasets",
    description:
      "Comprehensive A/B testing and statistical analysis across multiple real-world datasets including Facebook conversion data, covering hypothesis testing, significance analysis, and experiment design.",
    tags: ["A/B Testing", "Statistics", "Hypothesis Testing", "Facebook"],
    category: "Data Science",
    year: "2023",
    highlights: ["Multiple datasets", "Facebook conversion data"],
  },
  {
    title: "Recommendation Systems",
    subtitle: "4 Approaches — Content, Item, User, Model-Based",
    description:
      "Developed a comprehensive recommendation system portfolio implementing 4 different approaches: content-based, item-based collaborative filtering, user-based collaborative filtering, and model-based matrix factorization.",
    tags: ["Recommender System", "Collaborative Filtering", "Matrix Factorization"],
    category: "Data Science",
    year: "2023",
    highlights: ["4 approaches implemented", "Hybrid system"],
  },
  {
    title: "Association Rule Learning",
    subtitle: "Market Basket Analysis — 2 Projects",
    description:
      "Applied Apriori and association rule mining algorithms across 2 projects for market basket analysis, discovering purchasing patterns and product relationships.",
    tags: ["Apriori", "Market Basket", "Association Rules", "Business"],
    category: "Data Science",
    year: "2023",
    highlights: ["2 analysis projects"],
  },
  {
    title: "Rating & Sorting Systems",
    subtitle: "Wilson Lower Bound + IMDB Scoring — 4 Projects",
    description:
      "Built 4 different product rating and review sorting systems using statistical methods including Wilson Lower Bound, Bayesian average, and IMDB weighted scoring.",
    tags: ["Statistics", "Wilson Score", "Bayesian", "Ranking"],
    category: "Data Science",
    year: "2023",
    highlights: ["4 scoring systems", "Statistical methods"],
  },
  {
    title: "Rule-Based Classification",
    subtitle: "Customer Segmentation — 2 Projects",
    description:
      "Developed rule-based classification systems across 2 projects for customer segmentation and persona definition using demographic and behavioral data.",
    tags: ["Classification", "Rule-Based", "Segmentation", "Business"],
    category: "Data Science",
    year: "2023",
    highlights: ["2 classification projects"],
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
    title: "Airline Passenger Forecasting",
    subtitle: "Time Series Analysis — 27 Comments",
    description:
      "Time series forecasting of airline passenger volumes using statistical and ML approaches, with comprehensive trend and seasonality analysis.",
    tags: ["Time Series", "Forecasting", "ARIMA", "Visualization"],
    category: "Data Science",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["27 community comments", "Time series forecasting"],
  },
  {
    title: "Transaction Forecasting",
    subtitle: "Financial Time Series — 20 Comments",
    description:
      "Forecasting financial transaction volumes using time series methods with trend decomposition, seasonality modeling, and predictive analytics.",
    tags: ["Time Series", "Forecasting", "Financial", "Analytics"],
    category: "Data Science",
    year: "2024",
    links: { kaggle: "https://kaggle.com/mehmetisik" },
    highlights: ["20 community comments"],
  },
  {
    title: "Time Series Methods & Smoothing",
    subtitle: "Holt-Winters + Statistical Methods — 2 Projects",
    description:
      "Applied Holt-Winters exponential smoothing and various statistical time series methods across 2 projects for trend analysis and forecasting.",
    tags: ["Holt-Winters", "Time Series", "Smoothing", "Statistics"],
    category: "Data Science",
    year: "2023",
    highlights: ["2 methodology projects"],
  },
  {
    title: "Monthly Excel Data Separator",
    subtitle: "Python Automation Script",
    description:
      "Built a Python automation tool that separates large Excel files into monthly sheets, streamlining data organization workflows for business users.",
    tags: ["Python", "Automation", "Excel", "Pandas"],
    category: "Data Science",
    year: "2023",
    links: { github: "https://github.com/mmehmetisik" },
  },
];
