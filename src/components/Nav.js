import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title,
        };

    }
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand m-2" to="/">{this.state.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-
                    target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/pageB">Page B</Link>
                    </div>
                    <form class="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>

            </nav>

        );
    }
}



export default Nav;