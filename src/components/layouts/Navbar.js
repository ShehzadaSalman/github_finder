import React from 'react'
import PropTypes from 'prop-types'
const Navbar = () => {

    return <>
        <nav className="navbar navbar-light bg-warning mb-5">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-github"></i> Github finder
                    </a>
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