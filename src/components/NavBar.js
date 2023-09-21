import React from 'react'

import {
    Link
} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-success h5 active" to="/IndiaBizTimes-A-News-Application">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item h5"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item h5"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item h5"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item h5"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item h5"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item h5"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item h5"><Link className="nav-link" to="/world">World</Link></li>
                        </ul>

                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <label className="form-check-label h5" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            <input className="form-check-input mt-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
