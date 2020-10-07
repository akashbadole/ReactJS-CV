import React from 'react';
import {Link} from 'react-router-dom';

const Enterprise = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Navbar example</h1>
                <p className="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                <Link className="btn btn-lg btn-primary" to="#" role="button">View navbar docs &raquo;</Link>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action active">
                            Cras justo odio
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Morbi leo risus</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
                        <Link to="#" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">Vestibulum at eros</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action active">
                            Cras justo odio
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Morbi leo risus</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
                        <Link to="#" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">Vestibulum at eros</Link>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action active">
                            Cras justo odio
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Morbi leo risus</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
                        <Link to="#" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">Vestibulum at eros</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Enterprise;