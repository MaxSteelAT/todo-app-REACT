import "./filter.scss";
import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { clearItemsCompleted } from "../../redux/list";

function App() {
  const darkMode = useSelector((state) => state.darkMode);

  const listLength = useSelector((state) => state.list.length);

  const dispatch = useDispatch();
  const handleClearItemsCompleted = () => {
    dispatch(clearItemsCompleted());
  };
  return (
    <div className={`filter-container ${darkMode ? "dark" : ""}`}>
      <div className="filter">
        <div class="row">
          <div class="col-6 col-md-2 colums">{listLength} Items</div>
          <div class="col-6 col-md-6 colums content-filter-options">
            <div className="element-filter">All</div>
            <div className="element-filter">Active</div>
            <div className="element-filter">Completed</div>
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
