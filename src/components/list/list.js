import "./list.scss";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../redux/list";

function List() {
  const darkMode = useSelector((state) => state.darkMode);

  const data = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleChange = (indexSelected) => {
    const listUpdated = data.map((item, index) => {
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
          {data.map((item, index) => {
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
