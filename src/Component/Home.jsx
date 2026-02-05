import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#ffffff',
        padding: '20px 40px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#2563eb',
          letterSpacing: '-0.5px'
        }}>
          BrandLogo
        </div>
        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '30px',
            margin: '0',
            padding: '0'
          }}>
            <li><NavLink   to="/" href="#" style={{
              textDecoration: 'none',
              color: '#4b5563',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Home</NavLink></li>
            <li><NavLink   to="/about" href="#" style={{
              textDecoration: 'none',
              color: '#4b5563',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>About</NavLink></li>
        
            <li><NavLink   to="/contact" style={{
              textDecoration: 'none',
              color: '#4b5563',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={{
        padding: '80px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '800',
          color: '#1f2937',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Welcome to Our Platform
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#6b7280',
          maxWidth: '700px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Build amazing things with our powerful tools and services. Join thousands of satisfied customers who have transformed their business.
        </p>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          marginBottom: '60px'
        }}>
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
            Get Started
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: '#2563eb',
            border: '2px solid #2563eb',
            padding: '14px 32px',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
            Learn More
          </button>
        </div>

        {/* Features Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '60px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            textAlign: 'left'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#dbeafe',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>⚡</span>
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '15px',
              color: '#1f2937'
            }}>Fast & Efficient</h3>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              Our platform delivers lightning-fast performance with optimized workflows.
              Our platform delivers lightning-fast performance with optimized workflows.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            textAlign: 'left'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#f0f9ff',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '24px', color: '#0ea5e9' }}>🛡️</span>
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '15px',
              color: '#1f2937'
            }}>Secure & Reliable</h3>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              Enterprise-grade security with 99.9% uptime guarantee and data protection.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            textAlign: 'left'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#fef7cd',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '24px', color: '#eab308' }}>🔄</span>
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '15px',
              color: '#1f2937'
            }}>Easy Integration</h3>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              Seamlessly integrate with your existing tools and workflows.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '40px',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <p style={{ margin: '0', color: '#9ca3af' }}>
          © 2023 BrandName. All rights reserved.
        </p>
        <p style={{ margin: '10px 0 0', color: '#9ca3af', fontSize: '14px' }}>
          Made with ReactJS and inline CSS
        </p>
      </footer>
    </div>
  )
}

export default Home