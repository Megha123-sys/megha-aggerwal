# Portfolio Setup Guide

## 🚀 Quick Setup Instructions

### 1. Initial Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/megha-portfolio.git
cd megha-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

### 2. Customize Content

Edit `src/content_option.js` to update:
- **Personal Information**: Name, role, tagline, location
- **About Section**: Bio, experience, education
- **Skills**: Add/remove tools and technologies
- **Case Studies**: Your project examples with KPIs
- **Certifications**: Professional certifications and education
- **Contact**: Email, LinkedIn, availability

### 3. EmailJS Configuration

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create Email Service** (Gmail, Outlook, etc.)
3. **Create Email Template**
4. **Get your credentials**:
   - Service ID
   - Template ID  
   - Public Key
5. **Update `src/components/Contact.js`**:
   ```javascript
   'YOUR_SERVICE_ID'    // Replace with actual Service ID
   'YOUR_TEMPLATE_ID'   // Replace with actual Template ID
   'YOUR_PUBLIC_KEY'    // Replace with actual Public Key
   ```

### 4. Profile Image

1. **Add your photo** to `public/` folder
2. **Update path** in `src/content_option.js`:
   ```javascript
   profileImage: "/your-photo.jpg"
   ```

### 5. Customize Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #6c5ce7;    /* Main brand color */
  --secondary-color: #a29bfe;  /* Secondary color */
  --accent-color: #fd79a8;     /* Accent color */
}
```

### 6. Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### 7. Update Repository Settings

1. **Go to GitHub repository settings**
2. **Enable GitHub Pages** (if not already enabled)
3. **Set source to gh-pages branch**

## 📁 File Structure Overview

```
megha-portfolio/
├── public/                    # Static files
│   ├── index.html            # Main HTML file
│   └── profile-placeholder.jpg # Profile image
├── src/
│   ├── components/           # React components
│   │   ├── Navigation.js     # Navigation bar
│   │   ├── Hero.js          # Homepage hero section
│   │   ├── About.js         # About section
│   │   ├── Skills.js        # Skills & tools
│   │   ├── CaseStudies.js   # Project case studies
│   │   ├── Certifications.js # Education & certifications
│   │   ├── Contact.js       # Contact form
│   │   └── Footer.js        # Footer
│   ├── content_option.js    # All content data
│   ├── App.js              # Main app component
│   ├── App.css             # Styles
│   └── index.js            # App entry point
├── package.json             # Dependencies & scripts
└── README.md               # Project documentation
```

## 🎨 Customization Tips

### Adding New Sections
1. Create component in `src/components/`
2. Add route in `src/App.js`
3. Add navigation link in `src/components/Navigation.js`
4. Add content in `src/content_option.js`

### Styling Changes
- **Colors**: Edit CSS variables in `src/App.css`
- **Layout**: Modify Bootstrap classes in components
- **Animations**: Add CSS animations in `src/App.css`

### Adding New Skills
1. Add to `skillsList` in `content_option.js`
2. Add icon import in `Skills.js`
3. Update `getIcon()` function if needed

## 🔧 Troubleshooting

### Common Issues

**Portfolio not loading:**
- Check if all dependencies are installed: `npm install`
- Clear cache: `npm start -- --reset-cache`

**Contact form not working:**
- Verify EmailJS credentials
- Check browser console for errors
- Ensure EmailJS service is active

**Images not displaying:**
- Check file paths in `content_option.js`
- Ensure images are in `public/` folder
- Use correct file extensions

**Deployment issues:**
- Check GitHub Pages settings
- Verify `homepage` in `package.json`
- Ensure gh-pages branch exists

## 📞 Support

For additional help:
- Check the main README.md
- Review EmailJS documentation
- Create an issue on GitHub

---

**Happy customizing! 🎉** 