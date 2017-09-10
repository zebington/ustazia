import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.toggleMap = this.toggleMap.bind(this);
        this.state = {
            mapActive: false
        }
    }

    toggleMap() {
        this.setState({
            mapActive: !this.state.mapActive
        })
    }

    render() {
        return <span>
            <img className="map" src={this.props.img} alt={this.props.alt} onClick={this.toggleMap}/>
            {this.state.mapActive ? <Lightbox mainSrc={this.props.img} onCloseRequest={this.toggleMap} /> : null}
        </span>
    }
}