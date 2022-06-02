import React, { useState } from 'react'

const TodoForm = () => {
    const [Input, setInput] = useState("")
    return (
    <form className='Todo-form'>
        <input onChange={(e) => console.log (e)} className='todo-input' placeholder='Mau ngapain hari ini'/>
        <button className='todo-button'>Add Todo</button>
    </form>
    )
}

export default TodoForm
