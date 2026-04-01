import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Zap, Image as ImageIcon, Video, Download, 
  Share2, Instagram, Facebook, ChevronLeft, ChevronRight, 
  X, Smartphone, Menu, ArrowRight, CheckCircle, Type,
  Globe, Shield, Play
} from 'lucide-react';
import PostCreator from './components/PostCreator';
import './App.css';
import img1 from './assets/example_images/img1.jpg';
import img2 from './assets/example_images/img2.jpg';
import img3 from './assets/example_images/img3.jpg';
import img4 from './assets/example_images/img4.jpg';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.quickpost.app';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Type className="w-6 h-6" />,
      title: "Psychology-Backed Type",
      description: "Fonts and layouts designed to trigger dopamine and curiosity, perfect for theme page retention."
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Faceless Templates",
      description: "Ready-to-use aesthetics for niches like Business, Luxury, Motivation, and Stoicism."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Batch Content Flow",
      description: "Generate a week's worth of viral theme page content in minutes, not hours."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Ghost Export",
      description: "High-definition exports that look native to the Instagram algorithm for maximum reach."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Algorithm Optimized",
      description: "Smart suggestions based on current viral trends in the faceless creator space."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Multi-Account Sync",
      description: "Manage and export for multiple theme pages seamlessly from one powerful engine."
    }
  ];

  const exampleImages = [
    { src: img1, title: 'Stoic Wisdom', category: 'Mindset Niche' },
    { src: img2, title: 'Luxury Lifestyle', category: 'Aesthetic Niche' },
    { src: img3, title: 'Business Facts', category: 'Education Niche' },
    { src: img4, title: 'Growth Hacks', category: 'Marketing Niche' },
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

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % exampleImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + exampleImages.length) % exampleImages.length);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-100 selection:text-teal-900">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-teal-200/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-emerald-200/20 blur-[100px] rounded-full animate-pulse delay-700" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-teal-100/30 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass-card rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300 ${scrolled ? 'shadow-xl translate-y-2' : ''}`}>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-teal-glow group-hover:rotate-12 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight gradient-text">Quick Post</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Try Now', 'Examples'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors uppercase tracking-wider line-after"
                >
                  {item}
                </a>
              ))}
              <button 
                className="gradient-bg text-white px-8 py-2.5 rounded-xl font-bold hover:shadow-teal-glow transition-all transform hover:-translate-y-0.5 active:scale-95"
                onClick={() => window.open(PLAY_STORE_URL, '_blank')}
              >
                Get the App
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-6 right-6 mt-4 glass-card rounded-2xl p-6 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-4">
              {['Features', 'Try Now', 'Examples'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-lg font-bold text-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                className="w-full gradient-bg text-white px-6 py-4 rounded-xl font-bold shadow-lg"
                onClick={() => window.open(PLAY_STORE_URL, '_blank')}
              >
                Get it on Play Store
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="px-6 pb-24 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-100 px-4 py-2 rounded-full mb-8 animate-bounce-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">New: AI Video Export Beta</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
            The #1 Engine for 
            <span className="block gradient-text italic">Faceless Growth</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Scale your theme pages to millions with the only creator built specifically for faceless aesthetics and viral quote-based content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="w-full sm:w-auto gradient-bg text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-teal-glow transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 group"
              onClick={() => window.open(PLAY_STORE_URL, '_blank')}
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Get it on Play Store</span>
            </button>
            <a 
              href="#try-now" 
              className="flex items-center space-x-2 text-slate-900 font-bold text-lg hover:text-teal-600 transition-colors group"
            >
              <span>See how it works</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center space-x-2"><Instagram className="w-5 h-5" /> <span className="font-bold">Instagram</span></div>
            <div className="flex items-center space-x-2"><Facebook className="w-5 h-5" /> <span className="font-bold">Facebook</span></div>
            <div className="flex items-center space-x-2"><Play className="w-5 h-5" /> <span className="font-bold">TikTok</span></div>
            <div className="flex items-center space-x-2"><Globe className="w-5 h-5" /> <span className="font-bold">Threads</span></div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">Built for Creators</h2>
              <div className="w-24 h-1.5 gradient-bg mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                Every tool you need to dominate social media feeds, designed for speed and perfection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-teal-200 hover:bg-white hover:shadow-2xl transition-all group duration-500"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section id="try-now" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="glass-card rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 blur-3xl -mr-32 -mt-32 rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50/50 blur-3xl -ml-32 -mb-32 rounded-full" />
              
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-teal-700 font-bold text-xs uppercase tracking-widest mb-6">
                  Live Preview
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Try the experience</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                  Experience the power of our engine right here. No signup, no wait.
                </p>
              </div>

              <PostCreator />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="examples" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-slate-900 mb-4">Inspiration Feed</h2>
                <p className="text-xl text-slate-600 font-medium">See what millions of creators are building every day with Quick Post.</p>
              </div>
              <button 
                className="text-teal-600 font-bold flex items-center space-x-2 group"
                onClick={() => window.open('https://instagram.com/quick.post.app', '_blank')}
              >
                <span>Follow on Instagram</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {exampleImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer aspect-[3/4]"
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-2">{image.category}</span>
                    <h3 className="text-white font-black text-2xl">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto gradient-bg rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
              <Zap className="absolute top-10 left-10 w-24 h-24 rotate-12 blur-sm" />
              <Sparkles className="absolute bottom-10 right-10 w-32 h-32 -rotate-12 blur-sm" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight relative z-10">
              Ready to go viral? <br className="hidden md:block" />
              Download Quick Post today.
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <button 
                className="bg-white text-teal-600 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-teal-900/20 hover:scale-105 active:scale-95 transition-transform"
                onClick={() => window.open(PLAY_STORE_URL, '_blank')}
              >
                Get it on Play Store
              </button>
              <div className="flex items-center space-x-2 text-teal-50 font-bold">
                <Shield className="w-5 h-5" />
                <span>100% Free & Secure</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-100 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-black tracking-tight tracking-tight">Quick Post</span>
              </div>
              <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed font-medium">
                Empowering creators to share their voice through beautiful, impactfull visual content.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-xl mb-6">Product</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#features" className="hover:text-teal-400 transition-colors">Features</a></li>
                <li><a href="#try-now" className="hover:text-teal-400 transition-colors">Live Preview</a></li>
                <li><a href="#examples" className="hover:text-teal-400 transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-xl mb-6">Support</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/account-deletion" className="hover:text-teal-400 transition-colors">Account Deletion</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
                <li><a href="mailto:arisesoloapp@gmail.com" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 font-medium">
              © 2025 Quick Post by Arise Solo. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-500 font-bold">
              <span>Made with ❤️ for creators</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-8 right-8 text-white hover:text-teal-400 p-2 z-[102] transition-colors"><X size={32} /></button>
          
          <div className="relative max-w-5xl w-full px-6 flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button onClick={prevImage} className="absolute left-0 text-white hover:text-teal-400 p-4 transition-colors hidden sm:block"><ChevronLeft size={48} /></button>
            <div className="relative group">
              <img src={exampleImages[currentImageIndex].src} alt={exampleImages[currentImageIndex].title} className="max-h-[85vh] w-auto rounded-2xl shadow-2xl scale-in-center" />
              <div className="absolute bottom-0 inset-x-0 p-8 pt-20 bg-gradient-to-t from-slate-950 to-transparent rounded-b-2xl">
                <span className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2 block">{exampleImages[currentImageIndex].category}</span>
                <h4 className="text-white font-black text-3xl">{exampleImages[currentImageIndex].title}</h4>
              </div>
            </div>
            <button onClick={nextImage} className="absolute right-0 text-white hover:text-teal-400 p-4 transition-colors hidden sm:block"><ChevronRight size={48} /></button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-slate-900/50 backdrop-blur px-6 py-3 rounded-full border border-white/10">
            <span className="text-sm font-bold text-white uppercase tracking-widest">{currentImageIndex + 1} / {exampleImages.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
