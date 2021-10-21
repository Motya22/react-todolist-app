import { useState } from 'react';

const useTodoState = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  const [newValue, setNewValue] = useState('');

  return {
    isLoaded,
    error,
    todos,
    isModalShown,
    newValue,
    setIsLoaded,
    setError,
    setTodos,
    setIsModalShown,
    setNewValue,
  };
};

export default useTodoState;
