import React from 'react';

export default class CaptainTopNav extends React.component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#nav-collapse"
                                aria-expanded="false">
                            <span className="sr-only">
                                Toggle navigation
                            </span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h2>Caucus Central</h2>
                    </div>
                    <div className="collapse navbar-collapse"
                         id="nav-collapse">
                        <ul className="nav navbar-nav">
                            <li>/* Link */</li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
