import { useState } from "react";
import List from "./List";
import uuid from "react-uuid";

function Todo() {
  let [todos, setTodos] = useState([]);
  let [selectedTodo, setSelectedTodo] = useState("");
  let [selectedTodoId, setSelectedTodoId] = useState(null);
  console.log(selectedTodo);

  let handleSubmit = (e) => {
    e.preventDefault();
    let tempTodo = [...todos];
    if (selectedTodoId !== null) {
      let todo = tempTodo.find((tT) => tT.id === selectedTodoId);
      todo.todo = e.target.todo.value;
      setSelectedTodoId(null);
      setSelectedTodo("");
    } else {
      setTodos([
        { todo: e.target.todo.value, isChecked: false, id: uuid() },
        ...todos,
      ]);
    }
    e.target.reset();
    // let tempTodo = [...todos];
  };
  let removeTodo = (id) => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };
  let editeTodo = (id) => {
    let tempTodo = [...todos];
    let todo = tempTodo.find((tT) => tT.id === id);
    setSelectedTodo(todo);
    setSelectedTodoId(id);
  };
  let checkedTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo, index) => {
        if (id === todo.id) {
          if (todo.isChecked) {
            return {
              ...todo,
              isChecked: false,
            };
          } else {
            return {
              ...todo,
              isChecked: true,
            };
          }
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <>
      <h2 className="header">Todo App</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="formDesign"
          name="todo"
          type="text"
          defaultValue={selectedTodo.todo}
          placeholder="Add your Todo"
        />
        <button className="btn-design">Add</button>
      </form>
      <List
        todos={todos}
        onClick={removeTodo}
        onEdite={editeTodo}
        onChecked={checkedTodo}
      />
    </>
  );
}

export default Todo;
