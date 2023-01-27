import React from "react";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid text-center">
                    <a className="navbar-brand text-white bg-dark" href="#">Start Boostrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex flex-row-reverse">
                            <a className="nav-link active text-white bg-dark" aria-current="page" href="#">Home</a>
                            <a className="nav-link text-white bg-dark" href="#">About</a>
                            <a className="nav-link text-white bg-dark" href="#">Services</a>
                            <a className="nav-link text-white bg-dark">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        
    );
};

export default NavBar;