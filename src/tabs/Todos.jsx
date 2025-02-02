import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';
const todosInitial = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];
const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('saved-todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return todosInitial;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    window.localStorage.setItem('saved-todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
    const newTodo = {
      id: nanoid(),
      text: inputValue,
    };
    setTodos(prev => [...prev, newTodo]);
  };
  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  const editTodo = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };
  const reset = () => {
    setTodos(todosInitial);
  };
  const updateTodo = text => {
    console.log(text);
    setTodos(prev =>
      prev.map(todo => (todo.id === currentTodo.id ? { ...todo, text } : todo))
    );
    setIsEditing(false);
  };
  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          updateTodo={updateTodo}
          cancelUpdate={cancelEdit}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}

      {todos.length === 0 && (
        <>
          <Text textAlign="center">There are no any todos ...</Text>
          <button onClick={reset} type="button">
            Reset
          </button>
        </>
      )}
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
};

export default Todos;
