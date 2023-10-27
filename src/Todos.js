import React from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {

    const todosElement = todos.map((todo) => <Todo key={todo.id} {...todo}/>)

  return (
    <article className='todos'>
        {todosElement}
    </article>
  )
}

export default Todos