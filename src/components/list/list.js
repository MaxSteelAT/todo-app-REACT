import './list.scss'
// import { useState, useEffect } from 'react'

function List() {
  return (
    <div className="todo-list">
      <div>
<div> 
        <label className="input-label">
          <input type="checkbox" className="todo-checkbox" checked />
          <span>Complete online JavaScript course</span>
        </label>
       
        <label className="input-label">
          <input type="checkbox" className="todo-checkbox" checked />
          <span>Jog around the park 3x</span>
        </label>

 <label className="input-label">
          <input type="checkbox" className="todo-checkbox" checked />
          <span>10 minutes meditation</span>
        </label>
       
        <label className="input-label">
          <input type="checkbox" className="todo-checkbox" />
          <span>Read for 1 hour</span>
        </label>

        <label className="input-label">
          <input type="checkbox" className="todo-checkbox" checked />
          <span>Pick up groceries</span>
        </label>

        <label className="input-label">
          <input type="checkbox" className="todo-checkbox" checked />
          <span>Complete Todo App on Frontend Mentor</span>
        </label>
      </div>

      </div>
      
    </div >
  );
}

export default List;