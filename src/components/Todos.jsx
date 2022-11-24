import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { Button } from 'react-bootstrap';


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div className="addTodos ms-3">
      <input
        type="text"
        placeholder="type task name"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
     <Button  className="ms-3" onClick={() => add()}>
        add
     </Button>
 
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);