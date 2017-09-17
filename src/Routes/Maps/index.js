import React, {Component} from 'react';
import Header from '../../Components/Header';

import Map from '../../Components/Map';

import bg from '../../res/img/bg_maps.jpg';
import worldmap from '../../res/img/map.jpg';

export default class Maps extends Component {
    componentWillMount() {
        document.body.style.background = `url(${bg}) top center`;
        document.body.style.backgroundSize = `cover`;
    }

    render() {
        return <div>
            <Header/>
            <div className="content maps">
                <Map img={worldmap} alt="Ustazia Map"/>
            </div>
        </div>
    }
}