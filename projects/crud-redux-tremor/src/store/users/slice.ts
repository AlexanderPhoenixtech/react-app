import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    github: 'johndoe',

  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'janesmith@gmail.com',
    github: 'janesmith',
  },
  {
    id: '3',
    name: 'Evelyn',
    email: 'evelyngarcia@gmail.com',
    github: 'evegarcia',
  }  
]

export type UserId = string

export interface User{
  name:string;
  email:string;
  github:string;
}

export interface UserWithId extends User{
  id:UserId;
}

const initialState:UserWithId[]=(()=>{
  const persistedState = localStorage.getItem("__redux__state__");
  if(persistedState)return JSON.parse(persistedState).users;
  return DEFAULT_STATE;
})()

export const usersSlice = createSlice({
  name:'users',
  initialState,
  reducers:{
    addNewUser:(state,action:PayloadAction<User>)=>{
      const id = crypto.randomUUID()
      return [...state,{id,...action.payload}] // sin immer
    },
    deleteUserById:(state,action:PayloadAction<UserId>)=>{
      const id = action.payload;
      return state.filter((user)=>user.id !== id ); 
    },
    rollbackUser:(state,action:PayloadAction<UserWithId>)=>{
      const isUserAlreadyDefined =state.some(user=> user.id === action.payload.id)
      if(!isUserAlreadyDefined){
        state.push(action.payload) // con immer
      }
    }
  }

})

export default usersSlice.reducer;

export const {addNewUser, deleteUserById, rollbackUser }= usersSlice.actions