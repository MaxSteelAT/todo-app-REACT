import React from 'react';
import './input.scss';
import { useSelector } from 'react-redux';

function Input() {
  const darkMode = useSelector((state) => state.darkMode);
console.log(darkMode)
  return (
    <div className="header">
      <input type="text" className={`todo-input ${darkMode ? 'dark' : ''}`} placeholder="Create a new todo..." />
    </div>
  );
}

export default Input;