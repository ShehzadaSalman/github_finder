import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Navbar = () => {

    return <>
        <nav className="navbar bg-danger">
            <div className="container">
                <a className="navbar-brand" href="#">
                   <Link to="/"> 
                  <i className="fa fa-github"></i> Github finder
                  </Link>
                </a>
                <ul className="mt-3">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    </>

}

export default Navbar;

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}