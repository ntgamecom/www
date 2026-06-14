'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#1a1a2e',
      color: '#e0e0e0',
      padding: '16px 24px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      borderTop: '2px solid #e63946',
      fontSize: '14px',
      lineHeight: '1.5'
    }}>
      <span>
        NTGame 使用 Cookie 来改善体验和展示 Google AdSense 广告。继续使用即表示您同意我们的{' '}
        <a href="/privacy" style={{ color: '#e63946', textDecoration: 'underline' }}>隐私政策</a>。{' '}
        / We use cookies to improve your experience and serve Google AdSense ads. By continuing, you agree to our{' '}
        <a href="/privacy" style={{ color: '#e63946', textDecoration: 'underline' }}>Privacy Policy</a>.
      </span>
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            background: '#e63946',
            color: 'white',
            border: 'none',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px'
          }}
        >
          接受 / Accept
        </button>
        <button
          onClick={reject}
          style={{
            background: 'transparent',
            color: '#a0a0a0',
            border: '1px solid #555',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          拒绝 / Reject
        </button>
      </div>
    </div>
  )
}
