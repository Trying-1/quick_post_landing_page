import React from 'react';
import { Trash2, Shield, Info, Mail, CheckCircle } from 'lucide-react';

const AccountDeletion = () => {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <Trash2 className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Account Deletion Request</h1>
            <p className="text-gray-600">Quick Post - Data Deletion Information</p>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-blue-900 mb-2">Current Status</h2>
                <p className="text-blue-800">
                  Quick Post currently does not require account creation and does not collect personal data. 
                  All data is stored locally on your device. If account features are added in the future, 
                  this page will be updated with account deletion instructions.
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Current App Version (No Accounts)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Quick Post is currently designed with privacy in mind and operates completely offline. The app:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Does not require account creation or login</li>
                <li>Does not collect any personal information</li>
                <li>Does not store user data on any servers</li>
                <li>Does not track or monitor user activity</li>
                <li>Processes all content locally on your device</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Future Account Features</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If we introduce optional account features in the future (such as cloud backup, syncing, or premium features), 
                we will provide clear account deletion options including:
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>In-App Deletion:</strong> Delete your account directly from the app settings</li>
                  <li><strong>Email Request:</strong> Request account deletion by contacting support</li>
                  <li><strong>Data Export:</strong> Download your data before deletion</li>
                  <li><strong>Confirmation:</strong> Receive confirmation when deletion is complete</li>
                  <li><strong>Timeline:</strong> Account deletion within 30 days of request</li>
                </ul>
              </div>
              
              <p className="text-gray-700 mt-4">
                <strong>Note:</strong> Any future account features will be optional. You will always be able to use 
                Quick Post without creating an account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What Data Does the App Store?</h2>
              <p className="text-gray-700 mb-4">
                All data created by Quick Post is stored locally on your device only:
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Local Device Storage
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-blue-800 text-sm">
                  <li>Created posts and images (saved to your gallery)</li>
                  <li>Videos you create (saved to your gallery)</li>
                  <li>App preferences and settings (stored locally)</li>
                  <li>Temporary cache files (automatically cleared)</li>
                </ul>
              </div>

              <p className="text-gray-700">
                <strong>Important:</strong> All this data is under your complete control and stored only on your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How to Delete Your Data</h2>
              <p className="text-gray-700 mb-4">
                Since all data is stored locally on your device, you have full control to delete it at any time:
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Option 1: Delete Individual Files
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Go to your device's gallery and delete any posts or videos created by Quick Post. 
                    They are typically saved in the "Quick Post" folder.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Option 2: Clear App Data
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Clear the app's cache and data through your device settings:
                  </p>
                  <ol className="list-decimal pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Go to Settings → Apps → Quick Post</li>
                    <li>Tap "Storage"</li>
                    <li>Tap "Clear Data" and "Clear Cache"</li>
                  </ol>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Note:</strong> This will reset app preferences but won't delete files saved to your gallery.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Option 3: Uninstall the App
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Uninstalling Quick Post will remove:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>The app and all its components</li>
                    <li>App settings and preferences</li>
                    <li>Temporary cache files</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Note:</strong> Files saved to your gallery will remain unless you delete them manually.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">No Server-Side Data</h2>
              <div className="bg-purple-50 p-5 rounded-lg">
                <p className="text-purple-900 mb-3">
                  <strong>We want to emphasize:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-purple-800 text-sm">
                  <li>Quick Post does not have any servers or databases</li>
                  <li>No user data is ever transmitted from your device</li>
                  <li>There are no accounts, profiles, or user records to delete</li>
                  <li>We cannot access, view, or delete your local files</li>
                  <li>You have complete control over all your data</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Request Account Deletion (Future)</h2>
              <p className="text-gray-700 mb-4">
                When account features become available, you will be able to request account deletion by:
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-5 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Deletion Request Methods:</h3>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>In-App:</strong> Go to Settings → Account → Delete Account
                  </li>
                  <li>
                    <strong>Email:</strong> Send a deletion request to{' '}
                    <a 
                      href="mailto:arisesoloapp@gmail.com?subject=Account%20Deletion%20Request" 
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      arisesoloapp@gmail.com
                    </a>
                    {' '}with your registered email address
                  </li>
                  <li>
                    <strong>This Page:</strong> Use the deletion form that will be added here
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Important:</strong> Currently, no accounts exist, so there is nothing to delete. 
                  This section will be activated when account features are launched.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about data deletion, privacy, or future account features, please contact us:
              </p>
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <a 
                      href="mailto:arisesoloapp@gmail.com" 
                      className="text-purple-600 hover:text-purple-700"
                    >
                      arisesoloapp@gmail.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  We typically respond within 24-48 hours.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Related Information</h2>
              <p className="text-gray-700 mb-3">
                For more details about how Quick Post handles your data, please see:
              </p>
              <a 
                href="/privacy-policy" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </a>
            </section>
          </div>

          {/* Summary Box */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mt-12">
            <h3 className="text-xl font-bold mb-4 text-center">Summary</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">No Accounts</p>
                  <p className="text-sm text-gray-600">No login or registration required</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">No Data Collection</p>
                  <p className="text-sm text-gray-600">Zero personal data collected</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Local Storage Only</p>
                  <p className="text-sm text-gray-600">All data stays on your device</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Full Control</p>
                  <p className="text-sm text-gray-600">Delete anytime from your device</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-700 italic">
              Your privacy and control over your data is our top priority.
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

export default AccountDeletion;
