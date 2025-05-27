import { createSlice } from "@reduxjs/toolkit";

const tasks = [
  {
    done: true,
    text: "Complete online JavaScript course",
  },
  {
    done: false,
    text: "Jog around the park 3x",
  },
  {
    done: true,
    text: "10 minutes meditation",
  },
  {
    done: true,
    text: "Read for 1 hour",
  },
  {
    done: true,
    text: "Pick up groceries",
  },
  {
    done: true,
    text: "Complete Todo App on Frontend Mentor",
  },
];
const listSlice = createSlice({
  name: "list",
  initialState: {
    data: tasks,
    filterType: "all",
  },
  reducers: {
    addItem: (state, action) => {
      return state.data.unshift({ text: action.payload, done: false });
    },
    itemsActive: (state) => {
      return {
        data: state.data,
        filterType: "active",
      };
    },
    itemsCompleted: (state) => {
      return {
        data: state.data,
        filterType: "completed",
      };
    },
    itemsAll: (state) => {
      return {
        data: state.data,
        filterType: "all",
      };
    },
    clearItemsCompleted: (state) => {
      const clearList = state.data.filter((item) => item.done === false);
      return {
        data: clearList,
        filterType: state.filterType,
      };
    },
    setList: (state, action) => {
      return {
        data: action.payload,
        filterType: state.filterType,
      };
    },
  },
});

export const {
  addItem,
  itemsAll,
  itemsActive,
  deleteItem,
  checkItem,
  setList,
  itemsCompleted,
  clearItemsCompleted,
} = listSlice.actions;
export default listSlice.reducer;
