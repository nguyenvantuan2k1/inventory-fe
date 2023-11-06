import * as React from 'react';

interface IError404Props {
}

const Error404: React.FunctionComponent<IError404Props> = (props) => {
    return (
        <div className='text-center'>
            <div id="global-loader">
                <div className="whirly-loader"> </div>
            </div>

            <div className="main-wrapper">
                <div className="error-box">
                    <h1>404</h1>
                    <h3 className="h2 mb-3"><i className="fas fa-exclamation-circle"></i> Oops! Page not found!</h3>
                    <p className="h4 font-weight-normal">The page you requested was not found.</p>
                    <a href="index.html" className="btn btn-primary">Back to Home</a>
                </div>
            </div>
        </div>
    );
};

export default Error404;
