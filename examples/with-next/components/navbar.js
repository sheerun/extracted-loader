import React from 'react'
import FaGithub from 'react-icons/lib/fa/github'

export default () => (
  <nav className='navbar'>
    <div className='container'>
      <div className='navbar-brand'>
        <a className='navbar-item'>
          <img src={require('../static/logo.png')} alt='Logo' />
        </a>
        <span className='navbar-burger burger' data-target='navbarMenuHeroB'>
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id='navbarMenuHeroB' className='navbar-menu'>
        <div className='navbar-end'>
          <a className='navbar-item is-active'>Home</a>
          <a className='navbar-item'>Examples</a>
          <a className='navbar-item'>Documentation</a>
          <span className='navbar-item'>
            <a className='button is-info is-inverted'>
              <span className='icon'>
                <FaGithub />
              </span>
              <span>Download</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
)
