import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Redirect components to static HTML files
const PrivacyPolicyRedirect = () => {
  React.useEffect(() => {
    window.location.href = '/privacy-policy.html'
  }, [])
  return null
}

const AccountDeletionRedirect = () => {
  React.useEffect(() => {
    window.location.href = '/account-deletion.html'
  }, [])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyRedirect />} />
        <Route path="/account-deletion" element={<AccountDeletionRedirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
