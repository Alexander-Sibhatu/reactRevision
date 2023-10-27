import React from 'react';


const Todo = (todo) => {
    const {id, title, completed} = todo;
  return (
    <section className='todo'>
        <h2>{id}</h2>
        <p>{title}</p>
        <p>{completed}</p>
    </section>  
  )
}

export default Todo