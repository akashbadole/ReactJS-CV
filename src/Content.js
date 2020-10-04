import React from 'react';

const Content = () => {
    return (
        <div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">CV - A Web Developer</h1>
            <p className="lead"><b>Designer, Front-end Developer & Mentor</b> <br />
            I design and code beautifully simple things, and I love what I do.</p>
            <p>Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work
                 for agencies, consulted for startups, and collaborated with talented people to create digital
                  products for both business and consumer use. I'm quietly confident, naturally curious, and
                   perpetually working on improving my chops one design problem at a time.</p>
            </div>

            <div className="container">
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Free/Consultant</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$2 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                </div>
                </div>
                <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                </div>
                </div>
                <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Content;