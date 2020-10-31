const initialState = {
  list: [],
  loading: "NEVER",
  currentCategoryName: null,
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
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_CURRENT_CATEGORY_NAME":
      return {
        ...state,
        currentCategoryName: action.payload,
      };
    default:
      return state;
  }
};
