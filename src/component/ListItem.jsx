import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

function ListItem({ todo, onClick, onEdite, onChecked, isChecked }) {
  return (
    <>
      <ListGroup.Item className="list-flex" as="li">
        <div className="todo">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={onChecked}
          />
          <div
            className="todo-list"
            style={{ textDecoration: isChecked ? "line-through" : "none" }}
          >
            {todo}
          </div>
        </div>
        <div className="btn-dlt">
          {" "}
          <button className="btn-icon" onClick={onEdite}>
            <AiFillEdit />
          </button>
          <button className="btn-icon" onClick={onClick}>
            <FaTrashAlt />
          </button>
        </div>
      </ListGroup.Item>
    </>
  );
}

export default ListItem;
