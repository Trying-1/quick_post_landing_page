# Quick Start Guide

## 🚀 Get Your Landing Page Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` to see your landing page!

**Important URLs:**
- Home: `http://localhost:5173`
- Privacy Policy: `http://localhost:5173/#/privacy-policy`
- Account Deletion: `http://localhost:5173/#/account-deletion`

---

## 🖼️ Adding Your Example Images

### Step 1: Add Images to Assets Folder
Place your Instagram/Facebook post examples in `src/assets/`

**Recommended specs:**
- 3:4 aspect ratio (1080x1440px or 750x1000px)
- JPG, PNG, or WebP
- Under 500KB file size

### Step 2: Update App.jsx

Open `src/App.jsx` and find the `exampleImages` array (around line 56):

**Before:**
```javascript
const exampleImages = [
  // Uncomment and add your images here:
  // { src: '/src/assets/example1.jpg', title: 'Motivational Quote', category: 'Inspiration' },
];
```

**After:**
```javascript
const exampleImages = [
  { src: '/src/assets/quote1.jpg', title: 'Daily Motivation', category: 'Inspiration' },
  { src: '/src/assets/product.jpg', title: 'New Product', category: 'Business' },
  { src: '/src/assets/event.jpg', title: 'Summer Sale', category: 'Events' },
  { src: '/src/assets/brand.jpg', title: 'Brand Story', category: 'Branding' },
];
```

### Step 3: Save and See the Magic! ✨
The gallery will automatically appear on your landing page with:
- Beautiful hover effects
- Responsive grid layout
- Smooth zoom animations
- Category and title overlays

---

## 🎨 Quick Customization

### Change App Name
Search and replace "PostMaker" with your app name in:
- `src/App.jsx`
- `index.html`

### Update Colors
Edit `tailwind.config.js` to change the gradient colors:
```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Modify Content
In `src/App.jsx`, update:
- Hero section (line ~131)
- Features (line ~21)
- Download buttons (line ~143)

---

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist/` folder ready for deployment.

---

## 🌐 Deploy to GitHub Pages

### Quick Deploy Steps:

1. **Create GitHub repo and push:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: "GitHub Actions"

3. **For Custom Domain:**
   - Rename `public/CNAME.example` to `public/CNAME`
   - Add your domain name inside
   - Configure DNS with your domain provider

4. **Auto-deploy:**
   - Every push to `main` branch automatically deploys!

5. **Your Live URLs (with custom domain):**
   - Home: `https://yourdomain.com/`
   - Privacy Policy: `https://yourdomain.com/#/privacy-policy`
   - Account Deletion: `https://yourdomain.com/#/account-deletion`
   
   **Note:** The `#` in the URL is required for GitHub Pages routing.

---

## 🆘 Need Help?

Check the full `README.md` for detailed instructions.

**Common Issues:**
- Images not showing? Check the file path starts with `/src/assets/`
- Build errors? Run `npm install` again
- Port already in use? The dev server will suggest an alternative port

---

## 📝 Example Image Array Template

Copy and paste this template, then customize:

```javascript
const exampleImages = [
  { 
    src: '/src/assets/image1.jpg', 
    title: 'Your Title Here', 
    category: 'Category Name' 
  },
  { 
    src: '/src/assets/image2.jpg', 
    title: 'Another Title', 
    category: 'Another Category' 
  },
  { 
    src: '/src/assets/image3.jpg', 
    title: 'Third Example', 
    category: 'Category' 
  },
  { 
    src: '/src/assets/image4.jpg', 
    title: 'Fourth Example', 
    category: 'Category' 
  },
];
```

**Popular Categories:**
- Inspiration
- Business
- Events
- Branding
- Quotes
- Announcements
- Promotions
- Lifestyle

---

Happy building! 🎉
