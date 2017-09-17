import React, {Component} from 'react';
import Header from '../../Components/Header';
import v4 from 'uuid';

import bg from '../../res/img/bg_lidl.jpg';
import {gql, graphql} from 'react-apollo';

class Lidl extends Component {
    componentWillMount() {
        document.body.style.background = `url(${bg}) fixed top center`;
        document.body.style.backgroundSize = `cover`;
    }

    render() {
        let rows = null;
        if (this.props.data.allItems) {
            rows = this.props.data.allItems.map(item =>
                <tr key={v4()}>
                    <td className="name">{item.name}</td>
                    <td>{item.effect}</td>
                    <td className="cost">{item.cost}</td>
                </tr>
            );
        }

        return <div>
            <Header/>
            <div className="content lidl">
                <table>
                    <thead>
                    <tr>
                        <th className="name">Item</th>
                        <th>Effect</th>
                        <th className="cost">Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
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

export default graphql(LidlQuery)(Lidl, {options: {fetchPolicy: 'cache-and-network'}});
