import React, { Component, useEffect, useState } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';
// import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster: any) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: any) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  console.log(filteredMonsters);
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        className="search"
        placeholder="search monsters"
        onSearchChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
