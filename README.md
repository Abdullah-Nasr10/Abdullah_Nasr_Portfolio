# 🚀 Abdullah Nasr - Portfolio Website

A modern, fully responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Built with React, TypeScript, and Bootstrap, this portfolio features a clean design, dark/light mode toggle, interactive contact form, and real-time visitor tracking.

---

## 🛠️ Technologies Used

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-EA4335?style=for-the-badge&logo=gmail&logoColor=white)

---

## ✨ Features

### 🎨 **Modern Design**

- Clean and professional UI/UX
- Fully responsive layout for all devices
- Dark/Light mode toggle with persistent theme
- Smooth animations and transitions
- Custom color scheme with CSS variables

### 🏠 **Home Section**

- Hero section with professional introduction
- Call-to-action button
- Optimized images with lazy loading

### 👨‍💻 **About Section**

- Personal information and bio
- Skills showcase with categorized technologies
- Education timeline
- Downloadable CV
- Social media links

### 💼 **Projects Section**

- Dynamic project cards with images
- Category-based filtering (All, Frontend, Backend, Full-Stack)
- Technology badges with color coding
- Live demo and GitHub repository links
- Video preview support for projects

### 📧 **Contact Section**

- Interactive contact form with validation
- Real-time form validation using React Hook Form
- Email integration via EmailJS
- Contact information display
- Success/Error toast notifications

### 📊 **Additional Features**

- Visitor counter using Firebase Firestore
- Sidebar navigation with smooth scrolling
- SEO-optimized structure
- Performance optimized with lazy loading
- Accessible design (ARIA labels)

---

## 📂 Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # React components
│   ├── GlobalComponents/     # Reusable components (Button, Navbar, etc.)
│   ├── sections/            # Main page sections
│   ├── AboutSectionComponents/
│   ├── ContactSectionComponents/
│   └── ProjectsSectionComponents/
├── config/             # Firebase configuration
├── context/            # React Context (Theme)
├── data/               # Static data (projects, skills, etc.)
├── layout/             # Layout components
├── pages/              # Page components
├── routes/             # React Router configuration
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abdullah-Nasr10/Abdullah_Nasr_Portfolio.git
   cd Abdullah_Nasr_Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

---

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist` folder.

---

## 📦 Key Dependencies

- **React** - JavaScript library for building user interfaces
- **TypeScript** - Static type checking
- **Vite** - Fast build tool and dev server
- **Bootstrap 5** - CSS framework for responsive design
- **React Router** - Client-side routing
- **React Hook Form** - Form validation and management
- **EmailJS** - Email service integration
- **Firebase** - Backend services (Firestore for visitor tracking)
- **React Icons** - Icon library

---

## 🎨 Color Scheme

The project uses CSS custom properties for easy theme customization:

- **Primary Color**: `#1976D2`
- **Secondary Color**: `#0D47A1`
- **Dark Mode**: Automatically switches colors for optimal viewing

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (992px and up)
- 🖥️ Large screens (1200px and up)

---

## 🔧 Performance Optimizations

- ✅ Lazy loading for images
- ✅ Code splitting with React Router
- ✅ Optimized images (WebP format)
- ✅ CSS Custom Properties for theming
- ✅ Minimal CSS with Bootstrap utilities
- ✅ Async image decoding
- ✅ Responsive images with srcset

---

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/) with automatic deployments from the main branch.

**Live Demo**: [https://abdullah-nasr-portfolio.vercel.app](https://abdullah-nasr-portfolio.vercel.app)

---

## Contact

- **Email**: abdullah.nasr1022@gmail.com
- **LinkedIn**: [Abdullah Nasr](https://www.linkedin.com/in/abdullah-nasr-b66b11250/)
- **GitHub**: [@Abdullah-Nasr10](https://github.com/Abdullah-Nasr10)

---

## 🙏 Acknowledgments

- Bootstrap for the responsive grid system
- React Icons for the icon library
- EmailJS for email integration
- Firebase for backend services
- The React and TypeScript communities

---

Made with ❤️ by Abdullah Nasr

```

```
