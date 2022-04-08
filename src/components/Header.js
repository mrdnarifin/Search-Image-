import React from "react";
import { ReactComponent as Logo } from '../img/logo.svg'

const navbarStyle = {
    backgroundColor: 'blue'
}

const Header = (props) => {
    return (
        <nav style={navbarStyle} className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Logo style={{ maxWidth: '12rem', maxHeight: '4rem' }} />
            </div>
            </nav>
    )
}

export default Header;