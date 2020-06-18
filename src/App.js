import React from 'react';
import GridItem from './components/GridItem'
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      filteredItems: [],
      showFlags: false,
      order: 'asc'
    };

    this.changeFlagsVisibility = this.changeFlagsVisibility.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => this.setState({ items: data }));
  }

  changeFlagsVisibility() {
    this.setState({ showFlags: !this.state.showFlags });
  }

  sortItems() {
    this.setState({
      items: this.state.items.reverse(),
      order: this.state.order === 'asc' ? 'desc' : 'asc'
    });
  }

  handleChange(e) {
    const term = e.target.value.trim().toLowerCase();
    if (term.length === 0) {
      this.setState({ filteredItems: [] })
      return;
    }
    const searchResult = this.state.items.filter(item => item.name.toLowerCase().startsWith(term));
    this.setState({ filteredItems: searchResult });
  }

  render() {
    return (
      <div>
        <button onClick={this.changeFlagsVisibility}>{this.state.showFlags ? 'Hide' : 'Show'} flags</button>
        <button onClick={this.sortItems}>{this.state.order === 'asc' ? 'A-Z' : 'Z-A'}</button>
        <br />
        Search: <input type="text" placeholder="..." onChange={this.handleChange} />
        <GridItem items={this.state.filteredItems.length > 0 ? this.state.filteredItems : this.state.items} showFlags={this.state.showFlags} />
      </div>
    )
  }
}

export default App;
