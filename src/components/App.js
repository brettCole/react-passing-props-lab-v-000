import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }

    this.fetchFilters = this.fetchFilters.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit: fruit }))
  }

  updateFilter(e) {
    // console.log('update filter to: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  render() {
    return(
      <FruitBasket
        fruit = { this.state.fruit }
        filters = { this.state.filters }
        currentFilter = { this.state.currentFilter }
        updateFilterCallback = { this.updateFilter } />
    )
  }
}
