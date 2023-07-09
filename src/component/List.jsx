import React from "react";
import ListItem from "./ListItem";
import ListGroup from "react-bootstrap/ListGroup";
import Completed from "./Completed";

function List({ todos, onClick, onEdite, onChecked }) {
  return (
    <>
      <ListGroup as="ul">
        {todos
          ?.filter((todo) => todo.isChecked === false)
          .map((todo, i) => (
            <ListItem
              todo={todo.todo}
              key={i}
              onClick={() => onClick(todo.id)}
              onEdite={() => onEdite(todo.id)}
              onChecked={() => onChecked(todo.id)}
              isChecked={todo.isChecked}
            />
          ))}
        <Completed />
        {todos
          ?.filter((todo) => todo.isChecked === true)
          .map((todo, i) => (
            <ListItem
              todo={todo.todo}
              key={i}
              onClick={() => onClick(todo.id)}
              onEdite={() => onEdite(todo.id)}
              onChecked={() => onChecked(todo.id)}
              isChecked={todo.isChecked}
            />
          ))}
      </ListGroup>
    </>
  );
}

export default List;
