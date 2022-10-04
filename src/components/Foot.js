import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Foot extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="footer fixed-bottom">
                <div className="d-flex flex-row bd-highlight align-items-start mb-3">
                    <div className="p-2 bd-highlight mx-2 rounded-bottom" id="foot-button">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                    </div>
                    <div className="p-2 bd-highlight mx-2 rounded-bottom" id="foot-button">
                        <Link className="nav-item nav-link" to="/pageB">Page B</Link>
                    </div>
                </div>
            </div >
        );
    }
};

export default Foot;