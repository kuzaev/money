import React, { useState } from "react";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { expensesAddFormModaltoggle } from "../../store/actions/modals";

import "./ExpensesAddFormModal.scss";
import { addExpense } from "../../store/actions/expenses";
import { db } from "../../firebaseConfig";

const ExpensesAddFormModal = () => {
  const dispatch = useDispatch();
  let { list } = useSelector(({ expenses }) => expenses);
  const { list: categoriesList } = useSelector(({ categories }) => categories);

  const [data, setData] = useState({
    cost: null,
    text: null,
    categoryId: null,
  });

  const handleInputChange = (e) => {
    let { name, value } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let expense = { ...data };
    if (!expense.categoryId) {
      alert("Выберите категорию");
      return;
    }

    if (!expense.cost) {
      alert("Введите сумму расхода");
      return;
    }

    db.collection("expenses")
      .add(expense)
      .then((docRef) => {
        console.log(docRef.id);
        dispatch(addExpense(expense));
      })
      .catch((err) => {
        console.log(err);
      });

    db.collection("categories")
      .doc(expense.categoryId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let data = doc.data();
          let oldCost = data.cost || 0;
          let newCost = Number(expense.cost) + Number(oldCost);
          db.collection("categories")
            .doc(expense.categoryId)
            .update({ cost: newCost })
            .catch((err) => console.log(err));
        }
      });

    dispatch(expensesAddFormModaltoggle());
  };

  return (
    <div className="expenses-add-form-modal">
      <div className="expenses-add-form-modal__inner">
        <div className="expenses-add-form-modal__header">
          <div className="expenses-add-form-modal__title">Новый расход</div>
          <X
            color="white"
            size={32}
            onClick={() => {
              dispatch(expensesAddFormModaltoggle());
            }}
          />
        </div>
        <form className="expenses-add-form-modal__body" onSubmit={handleSubmit}>
          <div className="expenses-add-form-modal__input">
            <input
              name="text"
              type="text"
              placeholder="Введите описание"
              onChange={handleInputChange}
            />
          </div>
          <div className="expenses-add-form-modal__input">
            <input
              name="cost"
              type="text"
              placeholder="Введите сумму расхода"
              onChange={handleInputChange}
            />
          </div>
          <div className="expenses-add-form-modal__input">
            <select name="categoryId" onChange={handleInputChange}>
              <option>Выберите категорию</option>
              {categoriesList.map((option) => (
                <option value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          <button className="btn">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default ExpensesAddFormModal;
