export const setExpensesList = (payload) => ({
  type: "SET_EXPENSES_LIST",
  payload,
});

export const addExpense = (payload) => ({
  type: "ADD_EXPENSE",
  payload,
});

export const setLoading = (payload) => ({
  type: "SET_LOADING",
  payload
})

export const setCurrentCategoryName = (payload) => ({
  type: "SET_CURRENT_CATEGORY_NAME",
  payload
})