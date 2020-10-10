const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES_LIST":
      return {
        ...state,
        list: action.payload,
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        list: [...state.list, {...action.payload}],
      };
    default:
      return state;
  }
};
