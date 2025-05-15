import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Provider } from "react-redux";
import Header from "./components/header/header";
import DarkMode from "./components/darkMode/darkMode";
import Input from "./components/input/input";

import List from "./components/list/list";
import Filter from "./components/filter/filter";
import DragDropText from "./components/dragDropText/dragDropText";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="header-container">
          <div className="todo-container">
            <Header />
          </div>
          <div className="darkMode-container">
            <DarkMode />
          </div>
        </div>
        <div className="list-container">
          <Input />
          <List />
          <Filter />
          <DragDropText />
        </div>
      </div>
    </Provider>
  );
}

export default App;
