import {useState} from 'react'
import './App.css'
import {AiFillHeart} from "react-icons/ai"
function App ()  {
  let [todoInput,updateInput] =useState("test")
  let [todoList,updatetodos] =useState(
    [{
      id:1,
      task:'learn React'
    },
    {
      id:2,
      task:'get intern'
    },
    {
      id:3,
      task:'learn js'
    }
  
  ]
  )
  let nextid=4
  function addNewtodo(){
    if (todoInput == " ")
    alert("add some task")
  else{
  let newTodos=[
    ...todoList,
    {
      id:nextid++,
      task:todoInput
    }
  ]
  updatetodos(newTodos);
  updateInput(" ")
  }

  }
  function deleteTodo(id){
 let updatedTodos= todoList.filter(
  (todo)=>{
    return todo.id!=id

  }
)
updatetodos(updatedTodos)
  }

  return (
    <div className='container  mt-5 w-50'>
      <h3 className='text-center'>Todo App using React</h3>
      <div className='input-group'>
        <input className='form-control'onChange={(e)=>{
          let task= e.target.value;
          updateInput(task)

        }}type='text'value={todoInput}/>
        <button onClick={() =>{
          addNewtodo()
        }}className='btn btn-primary'>Add</button>

      </div>
      <ul className='list-group mt-4'>
        {
          todoList.map(
            (todo)=> {
              return(
                <li className='list-group-items'>
                  <p>{todo.task}</p>
                  <AiFillHeart/>
                  <p>Love You Bondam</p>
                  <button onClick={()=>
                  deleteTodo(todo.id)
                  } className='btn'>❌</button>

                </li>
              )
            }
          )
        }
      </ul>


    </div>
  
  )
}

export default App