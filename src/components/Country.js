import React from 'react'

import { FaTrash } from "react-icons/fa";

const Country = (props) => {
  const {id, name, population, capital} = props.country;
  const {onDelete} = props;

  const handleDelete = (id) => {
   onDelete(id);
  }
    
  return (
    <div className='country'>
      <p>{id}</p>
        <h3>Name: {name}</h3>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
        <button onClick={() => {handleDelete(id)}}> <FaTrash className='trash'/> Delete</button>
    </div>
  )
}

export default Country