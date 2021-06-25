import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0 }

export default ( state= initialState, action ) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.vlue + 1}
    case DeCREMENT:
      return { value: state.vlue - 1}
    default:
     return state 
  }
}