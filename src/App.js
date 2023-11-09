// import React, {useState} from 'react'
// import { v4 as uuidv4 } from 'uuid';

// import Countries from "./components/Countries";
// import NewCountry from './components/NewCountry';

// import Title from './Title';
import './App.css';
import useFetch from './hooks/useFetch';
import Todos from './Todos';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/todos';
  // const initialCountries = [
  //   {
  //     id: uuidv4(),
  //     name: "Northern Ireland",
  //     population: "1,885,000",
  //     capital: "Belfast",
  //   }
  // ]

  // const [countries, setCountries] = useState(initialCountries)

  // const handleNewCountry = (newCountry) => {
  //   console.log(newCountry);
  //   const currentCountries = ((countries) => [...countries, newCountry])
  //   setCountries(currentCountries);
  // }
  // const handleDeleteCountry = (id) => {
  //   const currentCountries = countries.filter((Country) => Country.id !== id);
  //   setCountries(currentCountries);
  // }

  const {data, loading, error } = useFetch(url)

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error ? <p>{error}</p>: <Todos todos={data} />}
      {
      /* <Title />
      <NewCountry onCreate={handleNewCountry}/>
      <Countries countriesInfo={countries} onDelete={handleDeleteCountry}/> */}
    </div>
  );
}

export default App;
