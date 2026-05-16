import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'home', to: '/' },
  { label: 'about', to: '/about' },
  { label: 'experience', to: '/experience' },
  { label: 'contact', to: '/contact' }
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="/images/logo.jpg" width="60" height="60" alt="logo poetical science" />
        </NavLink>

        <button
          className="navbar-light navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav stroke">
            {navItems.map((item) => (
              <li key={item.label} className="navbar-item">
                <NavLink
                  className="nav-link"
                  to={item.to}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
