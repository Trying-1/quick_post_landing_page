# How It Works - Client-Side Image & Video Generation

## ✅ 100% Static Site - No Server Required!

This landing page is a **completely static site** that can be hosted on GitHub Pages, Netlify, Vercel, or any static hosting service. All the magic happens in the user's browser!

## 🎨 Client-Side Technologies

### **Canvas API**
- Draws images directly in the browser
- Creates the 1080x1350px Instagram post format
- Renders text, colors, and uploaded images
- **No server processing needed**

### **File Reader API**
- Reads uploaded images from user's device
- Converts to base64 data URLs
- All processing happens locally in the browser
- **No files uploaded to any server**

### **MediaRecorder API**
- Records canvas stream at 30 FPS
- Creates video with fade effects
- Encodes to WebM or MP4 (browser-dependent)
- **All video encoding happens in the browser**

### **Blob & Download APIs**
- Creates downloadable files in memory
- Triggers browser's native download
- **No server storage required**

## 🚀 How Video Export Works

1. **Canvas Stream Capture**
   ```javascript
   const stream = canvas.captureStream(30); // 30 FPS
   ```
   - Browser captures canvas as a video stream
   - Happens entirely client-side

2. **Animation Loop**
   ```javascript
   requestAnimationFrame(animate);
   ```
   - Draws 240 frames (8 seconds × 30 FPS)
   - Applies fade in/out opacity changes
   - Pure JavaScript - no server needed

3. **Video Encoding**
   ```javascript
   const mediaRecorder = new MediaRecorder(stream, options);
   ```
   - Browser's built-in encoder creates video file
   - Supports WebM (VP8/VP9) or MP4
   - All encoding happens on user's device

4. **Download**
   ```javascript
   const blob = new Blob(chunks, { type: mimeType });
   const url = URL.createObjectURL(blob);
   ```
   - Creates temporary URL in browser memory
   - Triggers download via `<a>` element
   - File never touches a server

## 📦 Deployment on GitHub Pages

### What Gets Deployed:
- HTML, CSS, JavaScript files
- React components (compiled to JS)
- Image assets
- **No backend code**
- **No server-side processing**

### What Happens at Runtime:
1. User visits your GitHub Pages URL
2. Browser downloads static files (HTML/CSS/JS)
3. React app loads in browser
4. User interacts with the post creator
5. **All processing happens in their browser**
6. Files download directly to their device

## 🌐 Browser Compatibility

### Image Export:
- ✅ All modern browsers
- ✅ Mobile browsers (iOS Safari, Chrome, Firefox)
- Uses standard Canvas API

### Video Export:
- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari 14.1+ (Desktop & iOS)
- ✅ Opera

**Fallback codec detection** ensures it works across browsers:
```javascript
if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
  // Use VP9
} else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
  // Use VP8
} else {
  // Use default WebM or MP4
}
```

## 💡 Why This Works Without a Server

### Traditional Approach (Server-Side):
1. User uploads image to server ❌
2. Server processes image ❌
3. Server generates video ❌
4. Server sends file back ❌
5. **Requires backend infrastructure** ❌

### Our Approach (Client-Side):
1. User selects image (stays on device) ✅
2. Browser processes image ✅
3. Browser generates video ✅
4. Browser downloads file ✅
5. **Zero server costs** ✅

## 🔒 Privacy Benefits

- **No data leaves user's device**
- **No image uploads to servers**
- **No user tracking required**
- **GDPR-friendly by default**
- **Works offline** (after initial page load)

## 📊 Performance

### Image Export:
- **Instant** - Canvas to PNG conversion
- File size: ~200KB - 2MB

### Video Export:
- **8 seconds** - Real-time rendering (8s video = 8s to create)
- File size: ~5-8MB
- **No server queue** - starts immediately

## 🎯 Perfect for GitHub Pages

GitHub Pages is ideal for this because:
- ✅ Free static hosting
- ✅ Custom domain support
- ✅ HTTPS by default
- ✅ Global CDN
- ✅ **No server-side code allowed** (perfect for our use case!)

## 🚀 Deployment Steps

```bash
# Build the static site
npm run build

# The dist/ folder contains:
# - index.html
# - JavaScript bundles
# - CSS files
# - Assets

# GitHub Actions automatically deploys dist/ to GitHub Pages
# Users access: https://yourdomain.com
# Everything runs in their browser!
```

### Important URLs (HashRouter for GitHub Pages):
- **Home**: `https://yourdomain.com/`
- **Privacy Policy**: `https://yourdomain.com/#/privacy-policy`
- **Account Deletion**: `https://yourdomain.com/#/account-deletion`

**Note:** We use HashRouter (`#`) for client-side routing on GitHub Pages since it's static hosting without server-side routing support.

## 🎬 Summary

**This is a JAMstack application:**
- **J**avaScript - React for UI
- **A**PIs - Browser APIs (Canvas, MediaRecorder, File)
- **M**arkup - Static HTML

**Zero backend required. 100% client-side. Perfect for GitHub Pages!** 🎉
