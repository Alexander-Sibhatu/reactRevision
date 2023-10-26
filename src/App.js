import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import Countries from "./components/Countries";
import NewCountry from './components/NewCountry';

import Title from './Title';
import './App.css'

function App() {
  const initialCountries = [ 
    {
      id: uuidv4(),
      name: "Kenya",
      population: "100",
      capital: "Nairobi",
    },
    {
      id: uuidv4(),
      name: 'Ethiopia',
      population: "100",
      capital: "Addis Ababa",
    },
    {
      id: uuidv4(),
      name: "Eritrea",
      population: "100",
      capital: "Asmera",
    },
    {
      id: uuidv4(),
      name: "Sudan",
      population: "100",
      capital: "Kartum",
    },
    {
      id: uuidv4(),
      name: "Northern Ireland",
      population: "100",
      capital: "Belfast",
    }
  ]

  const [countries, setCountries] = useState(initialCountries)

  const handleNewCountry = (newCountry) => {
    const currentCountries = ((countries) => [...countries, newCountry])
    setCountries(currentCountries);
  }
  const handleDeleteCountry = (id) => {
    const currentCountries = countries.filter((Country) => Country.id !== id);
    setCountries(currentCountries);
  }

  return (
    <div className="App">
      <Title />
      <NewCountry onCreate={handleNewCountry}/>
      <Countries countriesInfo={countries} onDelete={handleDeleteCountry}/>
    </div>
  );
}

export default App;
