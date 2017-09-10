import React, {Component} from 'react';
import Header from '../../Components/Header';

import bg from '../../res/img/bg_lidl.jpg';

export default class Lidl extends Component {
    componentWillMount() {
        document.body.style.background = `url(${bg}) fixed top center`;
        document.body.style.backgroundSize = `cover`;
    }

    render() {
        return <div>
            <Header/>
            <div className="content lidl">
                <h2>We're currently sold out, check back soon.</h2>
            </div>
        </div>
    }
}