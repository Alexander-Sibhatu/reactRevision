import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewCountry = (props) => {
    const {onCreate} = props

    const [country, setCountry] = useState({
        id: uuidv4(),
        name: '',
        capital: '',
        population: '',
    });
 


    const handleChange = (event) => {
        setCountry((preCountry) => {
            return {...preCountry, [event.target.name]: event.target.value}
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(country)
        onCreate(country);
      }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='enter your name' 
        required onChange={handleChange} value={country.name}></input>

        <input type='text' name='capital' placeholder='enter capital city' 
        required onChange={handleChange} value={country.capital}></input>

        <input type='number' name='population' placeholder='enter population' 
        required onChange={handleChange} value={country.population}></input>

        <button type='submit'>Add Country</button>
    </form>
  )
}

export default NewCountry