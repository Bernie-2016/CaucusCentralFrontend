import React from 'react';

export default class CaptainTopNav extends React.component {

    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button"
                                class="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#nav-collapse"
                                aria-expanded="false">
                            <span class="sr-only">
                                Toggle navigation
                            </span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <h2>Caucus Central</h2>
                    </div>
                    <div class="collapse navbar-collapse"
                         id="nav-collapse">
                        <ul class="nav navbar-nav">
                        // Links go here.
                            <li>/* Link */</li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
