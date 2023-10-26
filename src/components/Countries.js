import React from 'react'

import Country from './Country';

const Countries = (props) => {
  const {onDelete, countriesInfo} = props
    const countriesElement = countriesInfo.map((country) => {
        return (
        <Country key={country.id}
        country={country} onDelete={onDelete}
        />
        );
      })
  return (
    <div className='countries'>
        {countriesElement}
    </div>
  )
}

export default Countries;