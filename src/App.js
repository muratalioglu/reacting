import React from 'react';
import GridItem from './components/GridItem'
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      showFlags: false
    };

    this.changeFlagsVisibility = this.changeFlagsVisibility.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => this.setState({ items: data }));
  }

  changeFlagsVisibility() {
    this.setState({ showFlags: !this.state.showFlags });
  }

  handleChange(e) {
    const term = e.target.value.toLowerCase();
    const result = this.state.items.filter(item => item.name.toLowerCase().startsWith(term));
    console.log(result);
  }

  render() {
    return (
      <div>
        <button onClick={this.changeFlagsVisibility}>{this.state.showFlags ? 'Hide' : 'Show'} flags</button>
        <br />
        Search: <input type="text" placeholder="..." onChange={this.handleChange} />
        <GridItem items={this.state.items} showFlags={this.state.showFlags} />
      </div>
    )
  }
}

export default App;
