import React, {Component} from 'react';
import Header from '../../Components/Header';

import bg from '../../res/img/bg.jpg';

export default class Home extends Component {
    componentWillMount() {
        document.body.style.background = `url(${bg}) fixed top right`;
        document.body.style.backgroundSize = `cover`;
    }

    render() {
        return <div>
            <Header/>
            <div className="content">
                <h2>Greetings traveller, and congratulations on your purchase of The Ustazia Companion!</h2>
                <p>The Companion represents the most cutting edge in magical publishing, and as a loyal
                    customer, you can expect your copy to update as you and other book lovers update it with
                    new and exciting things.</p>
                <p>With everything from maps to shop stocks, this grimoire has been designed to be your
                    one stop adventuring guide.</p>
                <blockquote>Property of The Lawkeeper Guild of Ustazia, provided to ________ (sign here) on the
                    ________ (date here)
                </blockquote>
            </div>
        </div>
    }
}
