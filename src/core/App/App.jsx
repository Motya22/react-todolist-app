import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import "./App.scss";

const App = ({ isLoaded, todos, fetchTodos, addTodo }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleToggleModal = () => {
    setIsModalShown((prevIsModalShown) => !prevIsModalShown);
    setNewValue("");
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newValue.trim()) {
      const newTodo = {
        id: todos.length ? todos.at(-1).id + 1 : 1,
        title: newValue,
        status: false,
      };

      addTodo(newTodo);

      setNewValue("");
      handleToggleModal();
    }
  };

  return (
    <div className="todo">
      <header className="todo__header">
        <h1>TODO List Demo App</h1>
        <p>
          <span>Do it now.</span>
        </p>
      </header>
      <ErrorBoundary>
        {isLoaded ? (
          <main className="todo__main">
            <Button className="add-task" onClick={handleToggleModal}>
              Add Task
            </Button>
            <Modal
              title="Add new task"
              isModalShown={isModalShown}
              onToggleModal={handleToggleModal}
            >
              <form id="add" onSubmit={handleAddTodo}>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="formTaskName">Task name</label>
                <input
                  id="formTaskName"
                  type="text"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  maxLength="80"
                />
              </form>
            </Modal>
            <Table />
          </main>
        ) : (
          <Loader />
        )}
      </ErrorBoundary>
    </div>
  );
};

App.propTypes = {
  isLoaded: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.object),
  fetchTodos: PropTypes.func,
  addTodo: PropTypes.func,
};

App.defaultProps = {
  isLoaded: false,
  todos: [{}],
  fetchTodos: () => {},
  addTodo: () => {},
};

export default App;
