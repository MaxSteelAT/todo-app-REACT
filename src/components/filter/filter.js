import "./filter.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  clearItemsCompleted,
  itemsCompleted,
  itemsActive,
  itemsAll,
} from "../../redux/list";

function App() {
  const darkMode = useSelector((state) => state.darkMode);
  const listLength = useSelector((state) => state.list.data.length);

  const dispatch = useDispatch();
  const handleItemsActive = () => {
    dispatch(itemsActive());
  };
  const handleItemsCompleted = () => {
    dispatch(itemsCompleted());
  };

  const handleClearItemsCompleted = () => {
    dispatch(clearItemsCompleted());
  };

  const handleItemsAll = () => {
    dispatch(itemsAll());
  };

  return (
    <div className={`filter-container ${darkMode ? "dark" : ""}`}>
      <div className="filter">
        <div class="row">
          <div class="col-6 col-md-2 colums">{listLength} Items</div>
          <div class="col-6 col-md-6 colums content-filter-options">
            <div className="element-filter">
              <a onClick={handleItemsAll}>All</a>
            </div>
            <div className="element-filter">
              <a onClick={handleItemsActive}>Active</a>
            </div>
            <div className="element-filter">
              <a onClick={handleItemsCompleted}>Completed</a>
            </div>
          </div>
          <div class="col-6 col-md-4 colums">
            <a onClick={handleClearItemsCompleted}>Clear Completed</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
