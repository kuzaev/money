import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import data from "../../data.json";
import {
  setExpensesList,
  setLoading,
  setCurrentCategoryName,
} from "../../store/actions/expenses";
import ExpensesListItem from "../ExpensesListItem";
import { db } from "../../firebaseConfig";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

const ExpensesList = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(({ expenses }) => expenses);

  const { id: categoryId } = useParams();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    if (categoryId) {
      let category = null;
      
      if (categories) {
        category = categories.list.find((c) => c.id === categoryId);
        dispatch(setCurrentCategoryName(category.name));
      }

      

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

          setTimeout(() => {
            dispatch(setLoading("LOADED"));
          }, 1000);
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
          setTimeout(() => {
            dispatch(setLoading("LOADED"));
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    

    return () => {
      dispatch(setLoading("NEVER"));
      dispatch(setCurrentCategoryName(null));
    };
  }, []);

  if (loading !== "LOADED") {
    return <Loader />;
  }

  if (list.length === 0) {
    return <p className="text-center">Пусто.</p>;
  }

  return (
    <div className="expenses-list">
      {list.length > 0 &&
        list.map((item) => <ExpensesListItem key={item.id} {...item} />)}
    </div>
  );
};

export default ExpensesList;
