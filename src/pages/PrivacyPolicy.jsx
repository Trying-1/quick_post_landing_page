import React from 'react';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a href="/" className="text-purple-600 hover:text-purple-700 font-medium">
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: October 30, 2025</p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Lock className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-green-900">No Data Collection</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-blue-900">No Tracking</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <FileText className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-purple-900">100% Local Processing</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Quick Post ("we", "our", or "the app") is committed to protecting your privacy. 
                This Privacy Policy explains how we handle information when you use our mobile application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <p className="font-bold text-green-900">We do NOT collect any personal information.</p>
              </div>
              <p className="text-gray-700 mb-3">Quick Post operates entirely on your device and does not:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Collect personal data</li>
                <li>Track your usage</li>
                <li>Send data to external servers</li>
                <li>Require account creation</li>
                <li>Use analytics or tracking tools</li>
                <li>Share information with third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How the App Works</h2>
              <p className="text-gray-700 mb-3">Quick Post is a completely offline application that:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Processes all images and videos locally on your device</li>
                <li>Saves all content directly to your device's storage</li>
                <li>Does not require an internet connection to function</li>
                <li>Does not upload or transmit any data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Permissions Used</h2>
              <p className="text-gray-700 mb-4">
                The app requests the following permissions solely for functionality:
              </p>

              <h3 className="text-xl font-semibold mb-3">Storage Permissions</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>READ_EXTERNAL_STORAGE</strong> (Android 12 and below): To access images from your gallery</li>
                <li><strong>WRITE_EXTERNAL_STORAGE</strong> (Android 12 and below): To save created posts and videos to your gallery</li>
                <li><strong>READ_MEDIA_IMAGES</strong> (Android 13+): To access images from your gallery</li>
                <li><strong>READ_MEDIA_AUDIO</strong> (Android 13+): To access audio files for video creation</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">Why we need these:</h4>
                <ul className="list-disc pl-6 space-y-1 text-blue-800 text-sm">
                  <li>To let you select images for creating posts</li>
                  <li>To save your created content to your device's gallery</li>
                  <li>To access audio files for adding to videos</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">What we DON'T do:</h4>
                <ul className="list-disc pl-6 space-y-1 text-red-800 text-sm">
                  <li>We do not access any files without your explicit selection</li>
                  <li>We do not upload or share your files</li>
                  <li>We do not scan or analyze your storage</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Storage</h2>
              <p className="text-gray-700 mb-3">All data created by Quick Post is stored locally on your device:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Created posts are saved to <code className="bg-gray-100 px-2 py-1 rounded">/DCIM/Quick Post/</code> or <code className="bg-gray-100 px-2 py-1 rounded">/Pictures/Quick Post/</code></li>
                <li>Cropped images are saved to your device's gallery</li>
                <li>Videos are saved to <code className="bg-gray-100 px-2 py-1 rounded">/DCIM/Quick Post/</code></li>
                <li>Audio files are stored in the app's local directory</li>
              </ul>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">You have complete control:</h4>
                <ul className="list-disc pl-6 space-y-1 text-purple-800 text-sm">
                  <li>You can delete any files at any time</li>
                  <li>Uninstalling the app removes all app-specific data</li>
                  <li>Your gallery content remains yours</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-3">Quick Post does NOT use any third-party services, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>No analytics (Google Analytics, Firebase, etc.)</li>
                <li>No advertising networks</li>
                <li>No crash reporting services</li>
                <li>No cloud storage services</li>
                <li>No social media integrations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Quick Post does not knowingly collect information from children under 13. 
                The app is safe for all ages as it does not collect any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-700 mb-3">Since Quick Post does not collect or transmit any data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>There is no data to be compromised</li>
                <li>All processing happens locally on your device</li>
                <li>Your content never leaves your device unless you explicitly share it</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-3">You have complete control over your data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> All your created content is in your device's gallery</li>
                <li><strong>Delete:</strong> You can delete any files at any time</li>
                <li><strong>Export:</strong> All files are standard formats (PNG, JPG, MP4) that you can move or share</li>
                <li><strong>Portability:</strong> Your content is not locked to the app</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Any changes will be posted in the app 
                and on this page. Continued use of the app after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or Quick Post, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Mail className="w-5 h-5" />
                  <span><strong>Email:</strong> arisesoloapp@gmail.com</span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Consent</h2>
              <p className="text-gray-700">
                By using Quick Post, you consent to this Privacy Policy.
              </p>
            </section>
          </div>

          {/* Summary Box */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mt-12">
            <h3 className="text-xl font-bold mb-4 text-center">Summary</h3>
            <p className="text-center font-semibold mb-4">Quick Post is a privacy-first application:</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 text-green-700">
                <span className="text-xl">✅</span>
                <span>No data collection</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <span className="text-xl">✅</span>
                <span>No internet required</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <span className="text-xl">✅</span>
                <span>No tracking or analytics</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <span className="text-xl">✅</span>
                <span>All processing on your device</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <span className="text-xl">✅</span>
                <span>Complete user control</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <span className="text-xl">✅</span>
                <span>No third-party services</span>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-700 italic">
              Your privacy is our priority. We believe your creative work should stay yours.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600">
          <p>© 2025 Quick Post. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
