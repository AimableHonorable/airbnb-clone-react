import logo from '../logo.png'
import { FiGlobe } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import { GoThreeBars } from 'react-icons/go'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} height="40" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav align-middle fw-bold text-dark">
                <li className="nav-item px-1">
                  <a className="py-1 px-2 rounded-pill nav-link text-dark" href="/">Become a host</a>
                </li>
                <li className="nav-item px-1 align-middle">
                  <a className="py-1 px-2 rounded-circle nav-link text-dark" href="/" > <FiGlobe /> </a>
                </li>
                <li className="nav-item px-1">
                  <a className="py-1 px-2 rounded-pill nav-link text-dark border border-1" href="/"><GoThreeBars/> <FaUserCircle  className="fs-3 text-muted"/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
