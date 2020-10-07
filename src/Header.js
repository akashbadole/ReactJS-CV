import { Link } from 'react-router-dom';
import { links } from './Data';
import React, { Component } from 'react';

class Header extends Component {

    state = {
        Links : links
    }

    render() {
        return (
            <div>
                 <div key="id.key" className="container d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/">Akash Badole</Link></h5>
                    {this.state.Links.map(Links => {
                        return (
                            <nav className="my-2 my-md-0 mr-md-3" key={Links.id}>
                                < Link className="p-2 text-dark" to={Links.path}>{Links.pathName}</Link>
                           
                            </nav> 
                        );
                    }
                    )}
                    
                    < Link className="btn btn-outline-primary" to="/Signup">Sign up</Link>
                 </div>
            </div>
        );
    }
}

export default Header;
