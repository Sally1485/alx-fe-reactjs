import React, {useState} from 'react'


    function TodoList () {
      const [todos, setTodos] = useState ([
          {id: 1, text: 'sleeping'},
          {id: 2, text:'playing ludo'},
          {id: 3, text:'praying to Jesus'},
          {id: 4, text:'reading my Bible'},
        ]);
        
        const deleteTodo = (id) => {
          setTodos(todos.filter(todo => todo.id !== id));
        };

        const toggleTodo = (id) => {
          setTodos(
            todos.map(todo =>{
              todo.id ===id ? {...todo, completed: !todo.completed}: todo
            })
          )

        }
      
        return (
          <div>
            <h2>Todo List</h2>
            <ul>
              {todos.map(todo => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                  {todo.text}
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      
  


export default TodoList