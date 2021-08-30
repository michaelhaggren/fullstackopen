import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Filter } from './components/Filter';
import { Countries, Country } from './components/Countries';

function removeElement(nums: number[], val: number): number {
  nums.forEach((item, index) => {
    if (item === val) nums.splice(index);
  });
  console.log(nums);
  return val;
}

removeElement([50, 40, 30, 30], 30);

const App = () => {
  const [newCountry, setCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  function handleFilterChange(event: { target: HTMLInputElement }) {
    setFilter(event.target.value);
  }

  return (
    <div className="main-content">
      <br />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries filter={filter} countries={newCountry} />
    </div>
  );
};

export default App;
