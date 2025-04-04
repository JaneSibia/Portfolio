# Jane Sibia - Medical Technologist Portfolio

![Lighthouse Score](https://img.shields.io/badge/Lighthouse-97%25-brightgreen)
![Visitor Count](https://visitor-badge.glitch.me/badge?page_id=JaneSibia.portfolio)

A cutting-edge portfolio showcasing my expertise in medical technology and healthcare innovation, featuring direct MySQL integration and responsive design.

🔗 **Live Demo**: [janesibiaportfolio.netlify.app](https://janesibiaportfolio.netlify.app)

## ✨ Key Features

- **Medical-Tech Hybrid UI**: Clean clinical aesthetic with interactive elements
- **Secure Contact System**: MySQL database integration with WebSQL fallback
- **Performance Optimized**: 95+ Lighthouse scores across all categories
- **Smart Theme Switching**: Auto-detects user preference (Dark/Light modes)
- **Offline Capability**: Service workers cache essential resources

## 🛠 Technology Stack

### Frontend
- HTML5, CSS3 (BEM methodology)
- Vanilla JavaScript (ES6+)
- CSS Variables for theming
- WebSQL for offline data persistence

### Backend
- Node.js with Express
- MySQL 8.0 database
- Netlify Edge Functions

### DevOps
- CI/CD via Netlify
- Automated database backups
- Performance monitoring

## 🚀 Installation

```bash
# Clone repository
git clone https://github.com/JaneSibia/medtech-portfolio.git
cd medtech-portfolio

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit with your database credentials
nano .env

# Start development server
npm run dev
