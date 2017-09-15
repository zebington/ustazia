import React, {Component} from 'react';
import Header from '../../Components/Header';

import bg from '../../res/img/bg_lidl.jpg';
import {gql, graphql} from 'react-apollo';

class Lidl extends Component {
    componentWillMount() {
        document.body.style.background = `url(${bg}) fixed top center`;
        document.body.style.backgroundSize = `cover`;
    }

    render() {
        return <div>
            <Header/>
            <div className="content lidl">
                <table>
                    <thead><tr>
                        <th className="name">Item</th>
                        <th>Effect</th>
                        <th className="cost">Cost</th>
                    </tr></thead>
                    <tbody>
                    <tr>
                        <td className="name">Test</td>
                        <td>Test</td>
                        <td className="cost">50</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}

const LidlQuery = gql`query allItems {
  allItems(orderBy:cost_ASC) {
    name
    effect
    cost
  }
}`;

export default graphql(LidlQuery)(Lidl);
