const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_EXPENSES_LIST":
      return {
        ...state,
        list: action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};
