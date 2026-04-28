# Pooja Valleti - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience in AI & ML Engineering, Python Development, and MERN Stack Development.

## ⭐ Featured Projects (Top 3)

- **AI-Based Malware Traffic Classification (Encrypted Traffic)**: Streamlit dashboard + ML pipeline to classify encrypted network flow traffic as benign or malicious.  
  - GitHub: https://github.com/pooja735/AI-Based-Malware-Traffic-Classification-System-for-Encrypted-Network-Traffic.git
- **Smart Parking Space & Traffic Flow Management System**: Real-time slot tracking, reservations, traffic monitoring, admin analytics, and automated payments.  
  - GitHub: https://github.com/pooja735/Smart-Parking-Management-System.git
- **Campus Management System**: Smart Canteen, Carpool Connect, Lost & Found, and dashboard with authentication and role-based access.  
  - GitHub: https://github.com/pooja735/CampusManagementSystem.git

## 🚀 Features

- **Modern Design**: Clean, professional design with glass-morphism effects
- **Responsive Layout**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between light and dark themes
- **Smooth Animations**: Engaging scroll-triggered animations and micro-interactions
- **Interactive Elements**: Hover effects, parallax scrolling, and dynamic content
- **Timeline Layout**: Experience section with timeline visualization
- **Skills Grid**: 5x4 grid layout for skills display
- **Project Showcase**: Detailed project cards with technology tags

## 🛠️ Technologies Used

- **React 18** (CDN) + **ReactDOM 18** (CDN)
- **Babel Standalone** (CDN) for on-the-fly JSX transpilation
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Vanilla JS for interactivity and animations
- **Google Fonts**: Inter and Poppins for typography
- **Material Icons**: For UI icons

## 📁 Project Structure

```
Pooja-Valleti-Portfolio/
├── index.html                  # Loads React/ReactDOM/Babel CDNs + mounts React app
├── styles/
│   ├── main.css               # Main stylesheet
│   ├── components.css         # Component-specific styles
│   └── animations.css         # Animation definitions
├── js/
│   ├── react-app.jsx          # React components and page rendering (Header, Hero, etc.)
│   ├── main.js                # Existing navigation/animations (still loaded)
│   └── theme.js               # Existing theme manager (still loaded)
├── public/
│   └── profile-photo.jpg      # Profile image
├── README.md                  # Project documentation
└── .gitignore                 # Git ignore file
```

## 🎨 Design Features

### Color Scheme
- **Light Theme**: Soft purple gradient background with white cards
- **Dark Theme**: Deep blue gradient with dark cards
- **Accent Colors**: Purple and pink gradients for highlights

### Animations
- Scroll-triggered fade-in animations
- Floating background elements
- Hover effects on cards and buttons
- Staggered animations for skills grid
- Typing effect for hero title

### Layout
- **Hero Section**: Introduction with profile image and social links
- **Projects**: Grid layout with technology tags
- **Skills**: 5x4 responsive grid
- **Experience**: Timeline layout with company details
- **Education**: Card layout with degree information
- **Contact**: Simple contact form with email link

## 📱 Responsive Design

- **Desktop**: Full layout with 5-column skills grid
- **Tablet**: 3-column skills grid, adjusted spacing
- **Mobile**: 2-column skills grid, stacked layouts

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Pooja-Valleti-Portfolio.git
   cd Pooja-Valleti-Portfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser (React is loaded via CDN)
   - Or use a local server (recommended during development):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Customize (React)**:
   - Edit React components in `js/react-app.jsx` (Header, Hero, Projects, Skills, Experience, Education, Contact, Footer)
   - Keep IDs/classes consistent if you still rely on `js/main.js` animations
   - Modify colors in CSS variables (`styles/main.css`)
   - Replace profile image in `public/` folder

4. (Optional) Fully migrate behavior to React hooks:
   - We currently keep `js/main.js` and `js/theme.js` for smooth transition
   - If you prefer, these can be reimplemented inside React and removed later

## 🎯 Key Sections

### About/Hero
- Professional introduction
- Role description
- Social media links
- Resume download

### Projects
- AI-Based Malware Traffic Classification (Encrypted Traffic)
- Smart Parking Space & Traffic Flow Management System
- Campus Management System
- TechStore E-commerce Website (MERN Stack)
- Gesture-Controlled Virtual Mouse (MediaPipe)
- MedMaster (ML/Flask)

### Skills
- Languages: Python, Java, C
- Frontend: React.js, Tailwind CSS, Bootstrap, HTML5, CSS3
- Backend & APIs: Node.js, Express.js, REST APIs, OpenAI API, JWT
- ML/AI: TensorFlow, Scikit-learn, Pandas, Matplotlib, MediaPipe, OpenCV
- Databases: MongoDB, MySQL, Oracle DB, Neo4J
- Tools & Platforms: Git, GitHub, Linux, Flask
- Cloud & DevOps: AWS, Azure (fundamentals)
- Core Concepts: Data Structures & Algorithms, System Design, Distributed Systems

### Experience
- AI Intern (Full-Time) - Cloudchip Technologies
- AI Intern - Cloudchip Technologies

### Certifications
- AI For Everyone — Coursera
- CCNAv7: Switching, Routing, and Wireless Essentials — Cisco
- Red Hat OpenStack Administration 1 — Red Hat Academy
- Developing Serverless Solutions on AWS - Course Supplement (OCS) — AWS
- Snowflake Hands-On Essentials: Data Warehouse — Snowflake

### Certifications (from resume)
- AI For Everyone — Coursera
- Cryptography and Hashing Fundamentals in Python and Java — Coursera
- CCNAv7: Switching, Routing, and Wireless Essentials — Cisco
- Red Hat OpenStack Administration 1 — Red Hat Academy
- Python Basics — HackerRank
- Blockchain and Cryptocurrency — Coursera
- C programming for Beginners — Udemy
- Introduction to Big Data with Spark and Hadoop — Coursera
- Principles of Secure Coding — Coursera
- Information Theory and Error Control Coding — Udemy
- Hackathon Turing Hacks 1.0 — Manipal University Jaipur

### Education
- M.Tech in Computer Science Engineering - Amrita University Coimbatore (2025 - Present)
- B.Tech in Computer & Communication Engineering - Manipal University Jaipur (2021 - 2025)
- Intermediate - MPC - Sri Chaitanya Junior Kalasala (2019 - 2021)
- CBSE 10th - Sri Chaitanya School (2018 - 2019)

## 🔧 Customization

### Adding New Projects (in React JSX)
Add a new project card inside the `Projects` section in `js/react-app.jsx`:
```jsx
<div className="project glass-card hover-lift">
    <h3 className="project__title">Your Project Title</h3>
    <p className="project__description">Project description...</p>
    <div className="project__stack">
        <span className="project__stack-item">Technology</span>
    </div>
    <div className="project__links">
        <a href="your-link" className="link link--icon hover-glow" target="_blank" rel="noopener noreferrer">
            {/* Optional: GitHub SVG icon */}
        </a>
    </div>
</div>
```

### Adding New Skills (in React JSX)
Update the skills array inside the `Skills` section in `js/react-app.jsx`:
```jsx
{[...existingSkills, 'Your Skill'].map((s) => (
    <div key={s} className="skill-item stagger-item">{s}</div>
))}
```

### Modifying Colors
Update CSS variables in `styles/main.css`:
```css
.light {
    --clr-primary: #your-color;
    --clr-accent: #your-color;
}
```

## ⚛️ How React is Wired

- `index.html` includes React, ReactDOM, and Babel via CDN, and adds a `<div id="react-root">` inside `#top`.
- `js/react-app.jsx` mounts a React app into `#react-root` and renders sections (Header/Hero/Projects/etc.).
- To avoid duplicate content, the React app removes pre-existing static sections at runtime.
- Existing scripts `js/main.js` and `js/theme.js` still run and target the same IDs/classes.

## ❓ FAQs

- Can I run this without a bundler like Vite or CRA?
  - Yes. This setup uses CDN + Babel Standalone so you can develop with plain files.
- How do I migrate all JS to React and remove old scripts?
  - Move logic from `js/main.js` and `js/theme.js` into React hooks/effects, then remove those files and script tags from `index.html`.


## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: poojavalleti04@gmail.com
- **GitHub**: [pooja735](https://github.com/pooja735)
- **LinkedIn**: [valleti-pooja-545a36242](https://www.linkedin.com/in/valleti-pooja-545a36242/)
- **Resume**: https://drive.google.com/file/d/1fI1S8NoXLAv3YayVOqdpmE9hhs5MI-ck/view?usp=sharing

---

**Built with ❤️ by Pooja Valleti** 
