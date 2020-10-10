const initialState = {
  expensesAddFormModal: false,
  categoriesAddFormModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "EXPENSES_ADD_FORM_MODAL_TOGGLE":
      return {
        ...state,
        expensesAddFormModal: !state.expensesAddFormModal,
      };
    case "CATEORIES_ADD_FORM_MODAL_TOGGLE":
      return {
        ...state,
        categoriesAddFormModal: !state.categoriesAddFormModal,
      };
    default:
      return state;
  }
};
