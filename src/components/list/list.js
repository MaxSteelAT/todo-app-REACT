import "./list.scss";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../redux/list";
import { useState, useEffect } from "react";

function List() {
  const darkMode = useSelector((state) => state.darkMode);
  const list = useSelector((state) => state.list);
  const [tasks, setTasks] = useState(list.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setTasks(list.data);
  }, [list.data]);

  useEffect(() => {
    if (list.filterType === "active") {
      setTasks(list.data.filter((item) => item.done === false));
    }
    if (list.filterType === "completed") {
      setTasks(list.data.filter((item) => item.done === true));
    }
    if (list.filterType === "all") {
      setTasks(list.data);
    }
    console.log("holis effect");
  }, [list.filterType, list.data]);

  const handleChange = (indexSelected) => {
    const listUpdated = list.data.map((item, index) => {
      if (indexSelected === index) {
        return {
          // ...item,
          text: item.text,
          done: item.done === true ? false : true,
        };
      }
      return item;
    });

    dispatch(setList(listUpdated));
  };

  return (
    <div className={`todo-list ${darkMode ? "dark" : ""}`}>
      <div>
        <div>
          {tasks.map((item, index) => {
            return (
              <label className="input-label">
                <input
                  onChange={() => handleChange(index)}
                  type="checkbox"
                  className="todo-checkbox"
                  checked={item.done}
                />
                <span>{item.text}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
