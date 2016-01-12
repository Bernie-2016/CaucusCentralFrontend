import React from 'react';
import './CaptainNav.scss';

export default class CaptainTopNav extends React.Component {
    render() {
        var logoURL = 'http://i.imgur.com/iKckvAn.png';
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-xs-4 text-left">
                        <p>Caucus Central</p>
                        </div>

                        <div className="col-xs-4 text-center
                                        logo-container">
                        <img className="image cc-logo"
                             src={logoURL}/>
                        </div>

                        <div className="col-xs-4 text-right">
                            <a className="btn btn-default
                                          signout-btn
                                          text-center"
                               href="#"
                               role="button"
                               onClick={this.props.signOut}>
                            <p>Sign Out</p>
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}
