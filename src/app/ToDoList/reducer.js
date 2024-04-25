import { ACTIONS } from "./action";

export const initialState = {
  todos: [],
  loading: true,
  error: "",
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_TODOS:
      return { ...state, loading: false, todos: action.data };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: "An error occurred......." };
    case ACTIONS.UPDATE_TODOS:
      return { ...state, todos: action.data };
    default:
      state;
  }
};
export default todosReducer;
