# Quick Post Landing Page

A modern, responsive landing page for Quick Post - an Instagram/Facebook post maker mobile app. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, gradient-based design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Optimized for GitHub Pages
- 🔥 Beautiful animations and transitions
- 📦 Ready for custom domain deployment
- 🖼️ Dynamic image gallery for showcasing example posts

## 📄 Privacy Policy & Account Deletion

### Privacy Policy
The privacy policy is available at:
- **Local Development**: `http://localhost:5173/privacy-policy`
- **Production**: `https://yourdomain.com/privacy-policy`

### Account Deletion Request
The account deletion page is available at:
- **Local Development**: `http://localhost:5173/account-deletion`
- **Production**: `https://yourdomain.com/account-deletion`

Use these URLs when submitting your app to Google Play Console or App Store.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn
### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Using Custom Domain

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source

3. **Configure Custom Domain**
   - In the same Pages settings, add your custom domain
   - Create a `CNAME` file in the `public` folder with your domain name
   - Update DNS settings with your domain provider:
     - Add a CNAME record pointing to `yourusername.github.io`
     - Or add A records pointing to GitHub's IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153

4. **Update vite.config.js**
   - If using a custom domain, keep `base: '/'`
   - If using `username.github.io/repo-name`, change to `base: '/repo-name/'`

5. **Deploy**
   - The GitHub Action will automatically deploy on every push to main
   - Your site will be live at your custom domain or `username.github.io/repo-name`

### Without Custom Domain

If you're deploying to `username.github.io/repo-name`:

1. Update `vite.config.js`:
   ```js
   base: '/your-repo-name/'
   ```

2. Follow steps 1, 2, and 5 from above

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── assets/                 # Add your example images here
│   ├── App.jsx                 # Main landing page component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

## Customization

### Adding Example Images

1. **Add your images** to the `src/assets/` folder
   - Recommended: 3:4 aspect ratio (1080x1440px or 750x1000px)
   - Formats: JPG, PNG, or WebP
   - Keep file size under 500KB

2. **Update the image array** in `src/App.jsx`:
   ```javascript
   const exampleImages = [
     { 
       src: '/src/assets/example1.jpg', 
       title: 'Motivational Quote', 
       category: 'Inspiration' 
     },
     { 
       src: '/src/assets/example2.jpg', 
       title: 'Product Launch', 
       category: 'Business' 
     },
     // Add more images...
   ];
   ```

3. The gallery will automatically appear with hover effects and responsive layout

### Colors
Edit the gradient colors in `tailwind.config.js` and `src/index.css`

### Content
Modify the content in `src/App.jsx`:
- Hero section text
- Features list
- Examples
- Call-to-action buttons
- Footer links

### Branding
- Update the app name "PostMaker" throughout the code
- Replace the Sparkles icon with your own logo
- Update meta tags in `index.html`

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **GitHub Actions** - CI/CD for deployment

## License

MIT License - feel free to use this for your own projects!
