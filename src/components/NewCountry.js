import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewCountry = (props) => {
    const {onCreate} = props

    const [name, setName] = useState('');
    const [capital, setCapital] = useState('');
    const [population, setPopulation] = useState();


    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleCapital = (event) => {
        setCapital(event.target.value);
    }
    const handlePopulation = (event) => {
        setPopulation(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCountry = {id: uuidv4(), name, capital, population};
        onCreate(newCountry);
        setName('');
        setCapital('');
        setPopulation('');
      }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='enter your name' 
        required onChange={handleName}></input>

        <input type='text' name='capital' placeholder='enter capital city' 
        required onChange={handleCapital}></input>

        <input type='number' name='population' placeholder='enter population' 
        required onChange={handlePopulation}></input>

        <button type='submit'>Add Country</button>
    </form>
  )
}

export default NewCountry