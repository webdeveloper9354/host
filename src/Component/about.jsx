import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
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
    </>
  )
}

export default About;