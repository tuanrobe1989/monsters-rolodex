import React, { Component } from 'react';
import { CartList } from './components/cart-list/cart-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
  }

  onSearchChange = event => {
    this.setState({ searchField : event.target.value })
  }

  render(){
    const{ monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>  
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={this.onSearchChange}
        />
        <CartList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
