import { useRef, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const todoEdit = useRef(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModal, setModal] =   useState(false);
  const addTodo = () => {
    if (todo !== ""){
      setTodos([...todos, todo]);
      setTodo("")
    }
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  const editTodo = (index) => {
    const todoEditInput = (<input type='text' name='todo-edit' ref={todoEdit} placeholder='Edit your todo'/>);
    todos[index] = todoEditInput;
    setTodos([...todos]);
  };
  const saveTodo = (index) =>{
    if (todoEdit.current.value !== ''){
      todos[index] = todoEdit.current.value;
    }
    else {
      setModal(true);
    }
    setTodos([...todos]);
  };
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput 
        todo={todo} 
        setTodo={setTodo} 
        addTodo={addTodo}
      />
      <TodoList 
        list={todos} 
        remove={deleteTodo} 
        edit={editTodo} 
        save={saveTodo}
        />
      <Modal
        isVisible={isModal}
        title="Warning!!!"
        content={<p>Enter not empty todo</p>}
        onClose={() => setModal(false)}
      />
    </div>
  );
}

export default App;
