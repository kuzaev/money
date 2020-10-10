import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import data from "../../data.json";
import { setExpensesList } from "../../store/actions/expenses";
import ExpensesListItem from "../ExpensesListItem";
import { db } from "../../firebaseConfig";
import { useParams } from "react-router-dom";

const ExpensesList = () => {
  debugger;
  const dispatch = useDispatch();
  const { list } = useSelector(({ expenses }) => expenses);

  const { id: categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      db.collection("expenses")
        .where("categoryId", "==", categoryId)
        .get()
        .then((querySnapshot) => {
          let docs = [];
          querySnapshot.forEach((doc) => {
            let expenseData = doc.data();
            let expenseId = doc.id;

            docs.push({ ...expenseData, uid: expenseId });
          });
          dispatch(setExpensesList(docs));
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(list);
    } else {
      db.collection("expenses")
        .get()
        .then((querySnapshot) => {
          let docs = [];

          querySnapshot.forEach((doc) => {
            let expenseData = doc.data();
            let expenseId = doc.id;

            docs.push({ ...expenseData, uid: expenseId });
          });
          dispatch(setExpensesList(docs));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (list.length === 0) {
    return <p>Пусто.</p>;
  }

  return (
    <div className="expenses-list">
      {list.length > 0 &&
        list.map((item) => <ExpensesListItem key={item.id} {...item} />)}
    </div>
  );
};

export default ExpensesList;
