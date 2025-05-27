import React from "react";
import "./input.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/list";

function Input() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const [item, setItem] = useState("");

  const addNewItem = (event) => {
    event.preventDefault();
    setItem("");

    const trimmedItem = item.trim();
    if (!trimmedItem) return;

    dispatch(addItem(trimmedItem));
    setItem("");
  };

  return (
    <div className="header">
      <form onSubmit={addNewItem}>
        <input
          type="text"
          className={`todo-input ${darkMode ? "dark" : ""}`}
          placeholder="Create a new todo..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Input;
