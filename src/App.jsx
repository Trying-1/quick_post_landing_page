import React, { useState } from 'react';
import { Sparkles, Zap, Image as ImageIcon, Video, Download, Share2, Instagram, Facebook, ChevronLeft, ChevronRight, X, Smartphone, Menu, ArrowRight, CheckCircle } from 'lucide-react';
import PostCreator from './components/PostCreator';
import './App.css';
import img1 from './assets/example_images/img1.jpg';
import img2 from './assets/example_images/img2.jpg';
import img3 from './assets/example_images/img3.jpg';
import img4 from './assets/example_images/img4.jpg';

// GitHub Release APK URL - Update this when you publish a new release
const APK_DOWNLOAD_URL = 'https://github.com/Trying-1/quick_post_landing_page/releases/latest/download/quick-post.apk';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    {
      icon: <Type className="w-6 h-6" />,
      title: "Beautiful Text Overlays",
      description: "Add stunning text with custom fonts, colors, and styles to your images"
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Image Templates",
      description: "Choose from hundreds of professionally designed templates"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Create and export your posts in seconds, not minutes"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export Anywhere",
      description: "Download in perfect resolution for Instagram, Facebook, and more"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Design",
      description: "Smart suggestions for layouts, colors, and text placement"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Direct Sharing",
      description: "Share directly to your social media platforms"
    }
  ];

  // Example images
  const exampleImages = [
    { src: img1, title: 'Motivational Quote', category: 'Inspiration' },
    { src: img2, title: 'Product Launch', category: 'Business' },
    { src: img3, title: 'Event Promo', category: 'Events' },
    { src: img4, title: 'Social Media Tips', category: 'Marketing' },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % exampleImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + exampleImages.length) % exampleImages.length);
  };

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const examples = [
    {
      title: "Motivational Quotes",
      description: "Perfect for daily inspiration posts"
    },
    {
      title: "Product Announcements",
      description: "Showcase your products with style"
    },
    {
      title: "Event Promotions",
      description: "Create eye-catching event graphics"
    },
    {
      title: "Personal Branding",
      description: "Build your brand with consistent posts"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Quick Post</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#try-now" className="text-gray-600 hover:text-gray-900 transition">Try Now</a>
              <a href="#examples" className="text-gray-600 hover:text-gray-900 transition">Examples</a>
              <a href="#download" className="text-gray-600 hover:text-gray-900 transition">Download</a>
              <button 
                className="gradient-bg text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition transform hover:scale-105"
                onClick={() => window.open(APK_DOWNLOAD_URL, '_blank')}
              >
                Download APK
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#try-now" className="block text-gray-600 hover:text-gray-900 transition">Try Now</a>
              <a href="#examples" className="block text-gray-600 hover:text-gray-900 transition">Examples</a>
              <a href="#download" className="block text-gray-600 hover:text-gray-900 transition">Download</a>
              <button 
                className="w-full gradient-bg text-white px-6 py-2 rounded-full font-medium"
                onClick={() => window.open(APK_DOWNLOAD_URL, '_blank')}
              >
                Download APK
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Create Viral Posts in Seconds</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
                Create Stunning
                <span className="gradient-text"> Social Media </span>
                Posts Instantly
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Design beautiful Instagram and Facebook posts with text overlays. 
                No design skills needed. Perfect for content creators, businesses, and influencers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  className="gradient-bg text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center space-x-2"
                  onClick={() => window.open(APK_DOWNLOAD_URL, '_blank')}
                >
                  <Download className="w-5 h-5" />
                  <span>Download APK (Android)</span>
                </button>
                <button 
                  className="bg-gray-400 text-white px-8 py-4 rounded-full font-medium cursor-not-allowed flex items-center justify-center space-x-2"
                  disabled
                  title="Coming Soon"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>iOS (Coming Soon)</span>
                </button>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>📱 Beta Testing:</strong> Download the APK directly from GitHub Releases. 
                  The app will be available on Google Play Store soon!
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span>Instagram Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <span>Facebook Optimized</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Mockup */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-300">
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <Type className="w-12 h-12 mx-auto mb-4" />
                        <p className="text-2xl font-bold">Your Text Here</p>
                        <p className="text-sm opacity-90 mt-2">Beautiful Typography</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex-1 h-12 bg-gray-100 rounded-lg"></div>
                      <div className="flex-1 h-12 bg-gray-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full blur-2xl opacity-50 animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to Create
              <span className="gradient-text"> Amazing Posts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make your social media content stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition group cursor-pointer"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try It Now Section - Interactive Post Creator */}
      <section id="try-now" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Try It Free - No Sign Up Required</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Create Your First Post
              <span className="gradient-text"> Right Now</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of our app. Create a beautiful Instagram post in seconds!
            </p>
          </div>

          <PostCreator />
        </div>
      </section>

      {/* Example Gallery Section */}
      {exampleImages.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                See What You Can
                <span className="gradient-text"> Create</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real examples of stunning posts created with our app
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exampleImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-xs font-medium opacity-80">{image.category}</p>
                      <p className="text-lg font-bold">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Examples Section */}
      <section id="examples" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Perfect For
              <span className="gradient-text"> Every Use Case</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From personal branding to business marketing, create posts that get noticed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl hover:shadow-lg transition group cursor-pointer"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">{example.title}</h3>
                <p className="text-gray-600 text-sm">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-bg rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Create Amazing Posts?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of creators who are already making stunning social media content
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center space-x-2"
                onClick={() => window.open(APK_DOWNLOAD_URL, '_blank')}
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </button>
              <button 
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center space-x-2"
                onClick={() => document.getElementById('try-now').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Try Web Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free to Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>No Watermarks</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Unlimited Exports</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Quick Post</span>
              </div>
              <p className="text-gray-400 text-sm">
                Create stunning social media posts with beautiful text overlays.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#/account-deletion" className="hover:text-white transition">Account Deletion</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">License</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Quick Post. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && exampleImages.length > 0 && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-[101]"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          {exampleImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition z-[101] bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={exampleImages[currentImageIndex].src}
              alt={exampleImages[currentImageIndex].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-sm text-white/80 mb-1">{exampleImages[currentImageIndex].category}</p>
              <p className="text-xl font-bold text-white">{exampleImages[currentImageIndex].title}</p>
              <p className="text-sm text-white/60 mt-2">
                {currentImageIndex + 1} / {exampleImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          {exampleImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition z-[101] bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Keyboard Hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
            Use arrow keys to navigate • ESC to close
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
