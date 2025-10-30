import React, { useState, useRef, useEffect } from 'react';
import { Download, Upload, Type as TypeIcon, Video } from 'lucide-react';
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

  // Canvas dimensions
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
        console.log('FFmpeg loaded successfully');
      } catch (error) {
        console.error('Failed to load FFmpeg:', error);
        alert('Failed to load video encoder. Video export may not work.');
      }
    };
    loadFFmpeg();
  }, []);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw text box (top 270px)
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, CANVAS_WIDTH, TEXT_BOX_HEIGHT);

    // Draw text
    ctx.fillStyle = textColor;
    ctx.font = 'bold 80px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Word wrap for long text
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

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

    // Draw each line
    const lineHeight = 90;
    const startY = TEXT_BOX_HEIGHT / 2 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => {
      ctx.fillText(line, CANVAS_WIDTH / 2, startY + index * lineHeight);
    });

    // Draw image section (bottom 1080px)
    if (uploadedImage) {
      const img = new Image();
      img.onload = () => {
        // Calculate dimensions to cover the area while maintaining aspect ratio
        const imgAspect = img.width / img.height;
        const targetAspect = CANVAS_WIDTH / IMAGE_HEIGHT;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (imgAspect > targetAspect) {
          // Image is wider
          drawHeight = IMAGE_HEIGHT;
          drawWidth = drawHeight * imgAspect;
          offsetX = -(drawWidth - CANVAS_WIDTH) / 2;
          offsetY = 0;
        } else {
          // Image is taller
          drawWidth = CANVAS_WIDTH;
          drawHeight = drawWidth / imgAspect;
          offsetX = 0;
          offsetY = -(drawHeight - IMAGE_HEIGHT) / 2;
        }
        
        ctx.drawImage(img, offsetX, TEXT_BOX_HEIGHT + offsetY, drawWidth, drawHeight);
      };
      img.src = uploadedImage;
    } else {
      // Placeholder gradient if no image
      const gradient = ctx.createLinearGradient(0, TEXT_BOX_HEIGHT, 0, CANVAS_HEIGHT);
      gradient.addColorStop(0, '#ec4899');
      gradient.addColorStop(0.5, '#8b5cf6');
      gradient.addColorStop(1, '#3b82f6');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, TEXT_BOX_HEIGHT, CANVAS_WIDTH, IMAGE_HEIGHT);
      
      // Placeholder text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Click "Upload Image" to add your photo', CANVAS_WIDTH / 2, TEXT_BOX_HEIGHT + IMAGE_HEIGHT / 2);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    
    // For mobile devices, we need to handle downloads differently
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Convert canvas to blob for better mobile support
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'instagram-post.png';
        link.href = url;
        link.click();
        
        // Clean up
        setTimeout(() => URL.revokeObjectURL(url), 100);
      }, 'image/png');
    } else {
      // Desktop download
      const link = document.createElement('a');
      link.download = 'instagram-post.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const drawCanvasWithOpacity = (opacity = 1, loadedImage = null) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Set global opacity for fade effect
    ctx.globalAlpha = opacity;

    // Draw text box (top 270px)
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, CANVAS_WIDTH, TEXT_BOX_HEIGHT);

    // Draw text
    ctx.fillStyle = textColor;
    ctx.font = 'bold 80px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Word wrap for long text
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

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

    // Draw each line
    const lineHeight = 90;
    const startY = TEXT_BOX_HEIGHT / 2 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => {
      ctx.fillText(line, CANVAS_WIDTH / 2, startY + index * lineHeight);
    });

    // Draw image section (bottom 1080px)
    if (loadedImage) {
      // Use pre-loaded image for video rendering
      const imgAspect = loadedImage.width / loadedImage.height;
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
      
      ctx.drawImage(loadedImage, offsetX, TEXT_BOX_HEIGHT + offsetY, drawWidth, drawHeight);
    } else if (uploadedImage) {
      // For preview, load image asynchronously
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
      // Placeholder gradient if no image
      const gradient = ctx.createLinearGradient(0, TEXT_BOX_HEIGHT, 0, CANVAS_HEIGHT);
      gradient.addColorStop(0, '#ec4899');
      gradient.addColorStop(0.5, '#8b5cf6');
      gradient.addColorStop(1, '#3b82f6');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, TEXT_BOX_HEIGHT, CANVAS_WIDTH, IMAGE_HEIGHT);
      
      // Placeholder text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Click "Upload Image" to add your photo', CANVAS_WIDTH / 2, TEXT_BOX_HEIGHT + IMAGE_HEIGHT / 2);
    }

    // Reset global alpha
    ctx.globalAlpha = 1;
  };

  const exportVideo = async () => {
    if (!ffmpegLoaded) {
      alert('Video encoder is still loading. Please wait a moment and try again.');
      return;
    }

    setIsRecording(true);
    setRecordingProgress(0);

    try {
      // Pre-load the image if it exists
      let loadedImage = null;
      if (uploadedImage) {
        loadedImage = new Image();
        loadedImage.src = uploadedImage;
        await new Promise((resolve) => {
          loadedImage.onload = resolve;
        });
      }

      const canvas = canvasRef.current;
      const fps = 30;
      const duration = 8; // 8 seconds
      const totalFrames = fps * duration; // 240 frames
      const fadeInFrames = fps * 3; // 3 second fade in (90 frames)
      const fadeOutFrames = fps * 3; // 3 second fade out (90 frames)

      // Create frames as images
      const frames = [];
      setRecordingProgress(5);

      for (let i = 0; i < totalFrames; i++) {
        let opacity = 1;

        // Fade in (first 3 seconds) - frames 0 to 89: 0% to 100%
        if (i < fadeInFrames) {
          opacity = i / fadeInFrames; // Linear fade from 0 to 1
        }
        // Fade out (last 3 seconds) - frames 150 to 239: 100% to 0%
        else if (i >= totalFrames - fadeOutFrames) {
          opacity = (totalFrames - i) / fadeOutFrames; // Linear fade from 1 to 0
        }

        // Draw frame
        drawCanvasWithOpacity(opacity, loadedImage);
        
        // Convert to blob
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        frames.push(blob);
        
        setRecordingProgress(5 + (i / totalFrames) * 45);
      }

      setRecordingProgress(50);

      // Use FFmpeg to create MP4
      const ffmpeg = ffmpegRef.current;

      // Write frames to FFmpeg virtual filesystem
      for (let i = 0; i < frames.length; i++) {
        const data = await fetchFile(frames[i]);
        await ffmpeg.writeFile(`frame${String(i).padStart(4, '0')}.png`, data);
      }

      setRecordingProgress(70);

      // Convert frames to MP4 with H.264
      await ffmpeg.exec([
        '-framerate', '30',
        '-i', 'frame%04d.png',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-t', '8',
        '-y',
        'output.mp4'
      ]);

      setRecordingProgress(90);

      // Read the output file
      const data = await ffmpeg.readFile('output.mp4');
      const blob = new Blob([data.buffer], { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);

      // Download
      const link = document.createElement('a');
      link.download = 'instagram-post-video.mp4';
      link.href = url;
      link.click();

      // Cleanup
      setTimeout(() => URL.revokeObjectURL(url), 100);
      
      // Clean up FFmpeg filesystem
      for (let i = 0; i < frames.length; i++) {
        await ffmpeg.deleteFile(`frame${String(i).padStart(4, '0')}.png`);
      }
      await ffmpeg.deleteFile('output.mp4');

      setRecordingProgress(100);
      setIsRecording(false);
      setRecordingProgress(0);
      
      // Redraw canvas at full opacity
      drawCanvas();
    } catch (error) {
      console.error('Video export error:', error);
      alert('Failed to create video. Please try again.');
      setIsRecording(false);
      setRecordingProgress(0);
      drawCanvas();
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Canvas Preview - Mobile First */}
      <div className="lg:hidden">
        <div className="bg-gray-100 rounded-2xl p-4 shadow-xl">
          <h4 className="text-lg font-bold mb-4 text-center">Preview</h4>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto" style={{ maxWidth: '400px' }}>
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              className="w-full h-auto touch-none"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-6">Create Your Post</h3>
          
          {/* Text Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <TypeIcon className="w-4 h-4 inline mr-2" />
              Your Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows="3"
              placeholder="Enter your text here..."
            />
          </div>

          {/* Color Pickers */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text Color
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer border-2 border-gray-300"
                />
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Color
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-12 h-12 rounded cursor-pointer border-2 border-gray-300"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                />
              </div>
            </div>
          </div>

          {/* Upload Image Button */}
          <div className="mb-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg active:scale-95 transition flex items-center justify-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Upload Image</span>
            </button>
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={downloadImage}
              disabled={isRecording}
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg active:scale-95 transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              <span>Download Image (PNG)</span>
            </button>

            <button
              onClick={exportVideo}
              disabled={isRecording || !ffmpegLoaded}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg active:scale-95 transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Video className="w-5 h-5" />
              <span>
                {!ffmpegLoaded ? 'Loading Encoder...' : isRecording ? 'Creating Video...' : 'Export as MP4 (8s)'}
              </span>
            </button>

            {/* Progress Bar */}
            {isRecording && (
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-full transition-all duration-100"
                  style={{ width: `${recordingProgress}%` }}
                />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Perfect for Instagram!</strong> Image: 1080x1350px. Video: 8 seconds with fade in/out effects.
            </p>
          </div>
        </div>
      </div>

      {/* Canvas Preview - Desktop */}
      <div className="hidden lg:block lg:sticky lg:top-24">
        <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-xl">
          <h4 className="text-lg font-bold mb-4 text-center">Preview</h4>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              className="w-full h-auto touch-none"
              style={{ maxHeight: '70vh' }}
            />
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
            1080 × 1350 pixels (Instagram Portrait)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;
