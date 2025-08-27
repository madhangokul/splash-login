import { useState } from 'react'
import SplashCursor from './SplashCursor'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const obstacle = { width: 380, height: 360 }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000',
        fontFamily: 'system-ui, sans-serif',
        color: '#fff',
      }}
    >
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <SplashCursor obstacle={obstacle} />
      </div>

      {/* Centered login */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // ✅ ensures horizontal centering
          padding: '24px',
        }}
      >
        <div
          style={{
            maxWidth: '380px',          // ✅ fixed max width
            width: '100%',              // ✅ responsive shrink (remove this if you want a fixed width)
            padding: '28px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(20,20,20,0.55)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.45)',
          }}
        >
          <h1
            style={{
              margin: '0 0 18px',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '0.3px',
              textAlign: 'center',
            }}
          >
            Sign in
          </h1>

          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', opacity: 0.9 }}>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={{
                  height: '44px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  outline: 'none',
                }}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', opacity: 0.9 }}>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  height: '44px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  outline: 'none',
                }}
              />
            </label>

            <button
              type="submit"
              style={{
                height: '44px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background =
                  'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))')
              }
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
