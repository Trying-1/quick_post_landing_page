# Assets Folder

## Adding Example Images

Place your Instagram/Facebook post example images in this folder.

### Recommended Image Specifications:
- **Format**: JPG, PNG, or WebP
- **Dimensions**: 3:4 aspect ratio (e.g., 1080x1440px or 750x1000px)
- **File Size**: Under 500KB for optimal loading
- **Naming**: Use descriptive names (e.g., `motivational-quote-1.jpg`, `product-announcement.png`)

### How to Use Your Images:

1. **Add images to this folder** (`src/assets/`)

2. **Update the `exampleImages` array in `src/App.jsx`**:

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
  { 
    src: '/src/assets/example3.jpg', 
    title: 'Event Promo', 
    category: 'Events' 
  },
  { 
    src: '/src/assets/example4.jpg', 
    title: 'Brand Post', 
    category: 'Branding' 
  },
];
```

3. **The gallery will automatically appear** on your landing page once you add images to the array.

### Example Categories:
- Inspiration
- Business
- Events
- Branding
- Quotes
- Announcements
- Promotions
- Personal

The gallery features:
- ✨ Hover effects with smooth zoom
- 📱 Responsive grid layout (1 column mobile, 2 tablet, 4 desktop)
- 🎨 Beautiful overlay with title and category on hover
- 🖼️ 3:4 portrait aspect ratio (perfect for Instagram/Facebook posts)
