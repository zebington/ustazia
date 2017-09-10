import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';

import map from '../../res/img/map.jpg';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleMap = this.toggleMap.bind(this);
        this.state = {
            navActive: false,
            mapActive: false
        };
    }

    toggleNav() {
        this.setState({
            navActive: !this.state.navActive
        });
    }

    toggleMap() {
        this.setState({
            mapActive: !this.state.mapActive
        })
    }

    render() {
        let hidden = this.state.navActive ? "" : " collapsed";
        return <header>
            <h1><Link to="/">Ustazia Compendium</Link></h1>
            <button className="nav-toggle" onClick={this.toggleNav}>Contents</button>
            <div className={`nav${hidden}`}>
                <div className="spacer" onClick={this.toggleNav} />
                <ul>
                    <li><Link to="/maps">Maps</Link></li>
                    <li><Link to="/lidl">Fantasy Lidl</Link></li>
                    <li><button onClick={this.toggleMap}>Show World Map</button></li>
                </ul>
            </div>
            {this.state.mapActive ? <Lightbox mainSrc={map} onCloseRequest={this.toggleMap} /> : null}
        </header>
    }
}
