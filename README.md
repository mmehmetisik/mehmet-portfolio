# mehmetisik.dev — Personal Portfolio

Professional portfolio website for **Mehmet Işık**, Data Scientist & Machine Learning Engineer.

🔗 **Live:** [https://mehmetisik.dev](https://mehmetisik.dev)

## About

Showcasing 40+ projects across GenAI & LLM, Machine Learning, Data Engineering & Cloud, AI Applications, NLP, and Data Science. Built to demonstrate technical expertise and real-world impact for international career opportunities.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4
- **Build:** Vite
- **Deployment:** Cloudflare Pages (auto-deploy from main branch)
- **Domain:** mehmetisik.dev (Cloudflare Registrar)

## Features

- Dark theme with cyan accent design
- Filterable project gallery with 6 categories
- Scroll reveal animations (CSS + Intersection Observer)
- Counter animation for statistics
- Fully responsive (mobile, tablet, desktop)
- Modular architecture following Single Responsibility Principle

## Project Structure
```
src/
├── data/           # Profile, skills, experience, projects, education
├── components/
│   ├── common/     # SectionHeader, TechBadge, SocialIcon
│   ├── layout/     # Navbar, Footer
│   └── sections/   # Hero, About, Skills, Experience, Projects, Education, Contact
├── hooks/          # useScrollReveal (Intersection Observer)
└── App.tsx         # Composition root
```

## Development
```bash
npm install
npm run dev
```

## Deployment

Push to `main` branch triggers automatic deployment to Cloudflare Pages.
```bash
git add .
git commit -m "your message"
git push
```

## Contact

- **Email:** mmehmetisik@hotmail.com
- **LinkedIn:** [linkedin.com/in/mehmetisik4601](https://linkedin.com/in/mehmetisik4601)
- **Kaggle:** [kaggle.com/mehmetisik](https://kaggle.com/mehmetisik)
- **GitHub:** [github.com/mmehmetisik](https://github.com/mmehmetisik)
