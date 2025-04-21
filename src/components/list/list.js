import './list.scss'
import { useState, useEffect } from 'react'

function List() {
  const [list, setList]= useState([
    {
      done: true,
      text: 'Complete online JavaScript course'
    },
    {
      done: false,
      text: 'Jog around the park 3x'
    },
    {
      done: true,
      text: '10 minutes meditation'
    },
    {
      done: true,
      text: 'Read for 1 hour'
    },
    {
      done: true,
      text: 'Pick up groceries'
    },
    {
      done: true,
      text: 'Complete Todo App on Frontend Mentor'
    }
  ])

  const handleChange = (indexSelected) => {
    const listUpdated = list.map((item, index)=>{
      if(indexSelected == index){
        return {
          // ...item,
          text: item.text,
          done: item.done == true ? false : true,

        }
      }
      return item
    })

    setList(listUpdated)
  }

  return (
    <div className="todo-list">
      <div>
        <div>
          {list.map((item, index) => {
            return (
              <label className="input-label">
                <input onChange={()=>handleChange(index)} type="checkbox" className="todo-checkbox" checked={item.done} />
                <span>{item.text}</span>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default List;