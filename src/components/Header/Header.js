import React, {Component} from 'react';

export default class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3 className="navbar-brand">Click Game</h3>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text ml-auto">
                        <p>Current Score: {this.props.currentScore}</p>
                        <p>High Score: {this.props.highScore}</p>
                    </span>
                </div>
            </nav>
        )
    }
};
