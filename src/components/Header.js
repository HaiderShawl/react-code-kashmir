import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="/">&lt;Code Kashmir/&gt;</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="oi oi-menu"></span> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Learn
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="basic-programming.html">Basic Programming</a></li>
              <li><a className="dropdown-item" href="web-development.html">Web Development</a></li>
              <li><a className="dropdown-item" href="/">Machine Learning</a></li>
            </ul>
          </li>

          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
          <li className="nav-item cta"><a href="contact.html" className="nav-link"><span>Register</span></a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header