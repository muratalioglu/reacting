import React from 'react';
import './GridItem.css';

class GridItem extends React.Component {

  render() {
    return (
      <div>
        <ol className="wrapper">
          {this.props.items.map(item => 
            <li key={item.alpha2Code} className="item">
              {this.props.showFlags && <img style={{ width: '20px'}} src={item.flag} alt={'Flag of ' + item.name} />}
              {' ' + item.name}
              <br />
              Capital: {item.capital}
            </li>
          )}
        </ol>
      </div>
    )
  }
}

export default GridItem;