import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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
]

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers:{
    addItem:(state, action) => {

      
    },
    deleteItem:(state, action) => {

    },
    checkItem:(state, action) =>{

    },
    setList: (state, action) => {
      console.log(action.payload)
      return action.payload;
    },
  }
});

export const {addItem, deleteItem, checkItem, setList} = listSlice.actions;
export default listSlice.reducer;