import React from 'react';
import {Link} from 'react-router-dom';

const Support = () => {
    return (
        <div className="container">
           {/* !-- Main jumbotron for a primary marketing message or call to action --> */}
            <div className="jumbotron">
                <div className="container">
                <h1 className="display-3">Hello, world!</h1>
                <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                <p><Link className="btn btn-primary btn-lg" to="#" role="button">Learn more &raquo;</Link></p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="card-link">Card link</Link> 
                                <Link to="#" className="card-link">Another link</Link> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="card-link">Card link</Link> 
                                <Link to="#" className="card-link">Another link</Link> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="card-link">Card link</Link> 
                                <Link to="#" className="card-link">Another link</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Support;