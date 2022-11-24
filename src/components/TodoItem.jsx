import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { Button } from 'react-bootstrap';

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
     
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <div
   
    key={item.id}
    className="card"
  >
    <textarea
      ref={inputRef}
      disabled={inputRef}
      defaultValue={item.item}
      onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
    />
    <div className="btns">
      <Button
        
        onClick={() => changeFocus()}
      >
       
        <AiFillEdit />
      </Button>
      {item.completed === false && (
        <Button className="ms-3 btn-success"  onClick={() => completeTodo(item.id)}>
          <IoCheckmarkDoneSharp  />
          </Button>
      )}
      
       
        <Button className="ms-3 btn-danger"  onClick={() => removeTodo(item.id)}>
        <IoClose   />
      
      </Button>
    </div>
    {item.completed && <span className="completed">done</span>}
 
    </div>
  );
};

export default TodoItem;