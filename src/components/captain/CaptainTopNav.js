import React from 'react';

export default class CaptainTopNav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-xs-4 text-left">
                        Caucus Central
                        </div>

                        <div className="col-xs-4 text-center">
                        Logo Here
                        </div>

                        <div className="col-xs-4 text-right">
                            <a className="btn btn-default"
                               href="#"
                               role="button">
                            Sign Out
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}
