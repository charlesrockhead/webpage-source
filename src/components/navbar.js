import React from 'react'

import '../styles/styles.sass'

const Nav = () => {
  return (
    <div style={{"margin-top":"1rem", "margin-bottom":"2rem"}}>
    <div class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item is-size-5" href="/">Home</a>
      <a class="navbar-item is-size-5" href="/work">Work</a>
      <a class="navbar-item is-size-5" href="/education">Education</a>
      <a class="navbar-item is-size-5" href="/projects">Projects</a>
      {/* <a class="navbar-item is-size-5" href="/blog">Blog</a> */}
    </div>
    </div>
    </div>
  )
}

export default Nav
