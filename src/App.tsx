import React, { ChangeEvent, Component, useEffect, useState } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { getData } from './utils/data.utils';
import SearchBox from './components/search-box/search-box.component';
// import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import './App.css';

type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Array<Monster>>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
