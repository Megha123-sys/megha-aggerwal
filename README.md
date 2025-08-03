# Megha Aggerwal - Performance Marketing Specialist Portfolio

A modern, responsive React.js portfolio website showcasing Megha Aggerwal's expertise in performance marketing, digital advertising, and campaign optimization.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Multi-page Navigation**: React Router for seamless page transitions
- **Typewriter Effect**: Animated tagline on the homepage
- **Contact Form**: EmailJS integration for easy communication
- **Modern UI**: Clean design with pastel color palette
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/megha-portfolio.git
   cd megha-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 📁 Project Structure

```
megha-portfolio/
├── public/
│   ├── index.html
│   └── profile-placeholder.jpg
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── CaseStudies.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── content_option.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## ⚙️ Configuration

### Content Management

All website content is centralized in `src/content_option.js`. Edit this file to update:

- Personal information
- Skills and tools
- Case studies
- Certifications and education
- Contact details
- Navigation labels

### EmailJS Setup

To enable the contact form functionality:

1. **Sign up for EmailJS**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Create a free account

2. **Create an Email Service**
   - Add your email provider (Gmail, Outlook, etc.)
   - Note down the Service ID

3. **Create an Email Template**
   - Design your email template
   - Note down the Template ID

4. **Get your Public Key**
   - Find your Public Key in the EmailJS dashboard

5. **Update the Contact Component**
   - Open `src/components/Contact.js`
   - Replace the placeholder values:
     ```javascript
     'YOUR_SERVICE_ID'    // Your EmailJS Service ID
     'YOUR_TEMPLATE_ID'   // Your EmailJS Template ID
     'YOUR_PUBLIC_KEY'    // Your EmailJS Public Key
     ```

### Profile Image

Replace the placeholder image:
1. Add your profile photo to the `public/` folder
2. Update the `profileImage` path in `src/content_option.js`

## 🎨 Customization

### Colors

The color scheme is defined in CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #6c5ce7;
  --secondary-color: #a29bfe;
  --accent-color: #fd79a8;
  /* ... other colors */
}
```

### Styling

- **Typography**: Uses Inter font family
- **Shadows**: Consistent shadow system for depth
- **Animations**: Smooth hover effects and transitions
- **Responsive**: Mobile-first responsive design

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/megha-portfolio"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deployment scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build/` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 📦 Dependencies

### Core Dependencies
- **React** (18.x) - UI library
- **React Router** (6.x) - Client-side routing
- **React Bootstrap** (2.x) - UI components
- **Bootstrap** (5.x) - CSS framework

### Additional Dependencies
- **React Icons** - Icon library
- **Typewriter Effect** - Animated text
- **EmailJS** - Contact form functionality

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Proper heading hierarchy
- Alt text for images

## 🔒 Security

- Form validation
- XSS protection
- Secure external links
- HTTPS enforcement

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Contact: megha.aggerwal@email.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React.js community
- Bootstrap team
- React Icons contributors
- EmailJS for contact form functionality

---

**Made with ❤️ by Megha Aggerwal**
