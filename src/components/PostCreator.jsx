import React, { useState, useRef, useEffect } from 'react';
import { Download, Upload, Type as TypeIcon, Video, AlertCircle, Check, Loader2 } from 'lucide-react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

const PostCreator = () => {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [text, setText] = useState('Your Text Here');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [textColor, setTextColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const ffmpegRef = useRef(new FFmpeg());
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);

  const CANVAS_WIDTH = 1080;
  const CANVAS_HEIGHT = 1350;
  const TEXT_BOX_HEIGHT = 270;
  const IMAGE_HEIGHT = 1080;

  useEffect(() => {
    drawCanvas();
  }, [text, uploadedImage, textColor, bgColor]);

  useEffect(() => {
    const loadFFmpeg = async () => {
      try {
        const ffmpeg = ffmpegRef.current;
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
        await ffmpeg.load({
          coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
          wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        setFfmpegLoaded(true);
      } catch (error) {
        console.error('Failed to load FFmpeg:', error);
      }
    };
    loadFFmpeg();
  }, []);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, CANVAS_WIDTH, TEXT_BOX_HEIGHT);
    ctx.fillStyle = textColor;
    ctx.font = 'bold 80px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0] || '';
    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + ' ' + words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > CANVAS_WIDTH - 100) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    const lineHeight = 100;
    const startY = TEXT_BOX_HEIGHT / 2 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => {
      ctx.fillText(line, CANVAS_WIDTH / 2, startY + index * lineHeight);
    });

    if (uploadedImage) {
      const img = new Image();
      img.onload = () => {
        const imgAspect = img.width / img.height;
        const targetAspect = CANVAS_WIDTH / IMAGE_HEIGHT;
        let drawWidth, drawHeight, offsetX, offsetY;
        if (imgAspect > targetAspect) {
          drawHeight = IMAGE_HEIGHT;
          drawWidth = drawHeight * imgAspect;
          offsetX = -(drawWidth - CANVAS_WIDTH) / 2;
          offsetY = 0;
        } else {
          drawWidth = CANVAS_WIDTH;
          drawHeight = drawWidth / imgAspect;
          offsetX = 0;
          offsetY = -(drawHeight - IMAGE_HEIGHT) / 2;
        }
        ctx.drawImage(img, offsetX, TEXT_BOX_HEIGHT + offsetY, drawWidth, drawHeight);
      };
      img.src = uploadedImage;
    } else {
      const gradient = ctx.createLinearGradient(0, TEXT_BOX_HEIGHT, 0, CANVAS_HEIGHT);
      gradient.addColorStop(0, '#2dd4bf');
      gradient.addColorStop(0.5, '#14b8a6');
      gradient.addColorStop(1, '#0d9488');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, TEXT_BOX_HEIGHT, CANVAS_WIDTH, IMAGE_HEIGHT);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '500 48px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('Tap "Upload Image" to stylize your niche', CANVAS_WIDTH / 2, TEXT_BOX_HEIGHT + IMAGE_HEIGHT / 2);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setUploadedImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'quick-post.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Controls */}
      <div className="space-y-8 order-2 lg:order-1">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <TypeIcon size={16} className="text-teal-500" />
              Impactful Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all resize-none text-lg font-medium text-slate-800"
              rows="3"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Text Style</label>
              <div className="flex items-center gap-3 p-3 bg-white border-2 border-slate-100 rounded-2xl">
                <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent" />
                <span className="font-mono text-xs font-bold text-slate-400 uppercase">{textColor}</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Background</label>
              <div className="flex items-center gap-3 p-3 bg-white border-2 border-slate-100 rounded-2xl">
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent" />
                <span className="font-mono text-xs font-bold text-slate-400 uppercase">{bgColor}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200"
            >
              <Upload size={20} />
              <span>Choose Your Background</span>
            </button>
            <button
              onClick={downloadImage}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 gradient-bg text-white rounded-2xl font-black text-lg hover:shadow-teal-glow transition-all active:scale-95 shadow-xl"
            >
              <Download size={22} />
              <span>Export High-Res Image</span>
            </button>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 bg-teal-50 rounded-2xl border border-teal-100">
          <AlertCircle className="text-teal-600 shrink-0 mt-1" size={20} />
          <p className="text-teal-800 font-semibold text-sm leading-relaxed">
            The full mobile app supports batch generation, automated templates, and viral niche scheduling.
          </p>
        </div>
      </div>

      {/* Preview */}
      <div className="order-1 lg:order-2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
          <div className="relative glass-card rounded-[2.5rem] p-4 shadow-2xl">
            <div className="bg-slate-100 rounded-3xl overflow-hidden aspect-[1080/1350] shadow-inner relative">
              <canvas
                ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">HD Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;
