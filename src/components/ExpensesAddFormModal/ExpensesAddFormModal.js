import React, { useState } from "react";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { expensesAddFormModaltoggle } from "../../store/actions/modals";

import Modal from "../Modal";

import "./ExpensesAddFormModal.scss";
import { addExpense } from "../../store/actions/expenses";
import { db } from "../../firebaseConfig";
import Select from "react-select";

import api from "../../api"

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

    api.addExpense(expense)
      .then(data => dispatch(addExpense(data)))
      .catch(err => alert(err.toString()));

    api.updateCostByCategory(expense.cost, expense.categoryId)
      .then(data => {
        console.log(data)
      })
      .catch(err => alert(err.toString()));


    dispatch(expensesAddFormModaltoggle());
  };

  const closeModal = () => {
    dispatch(expensesAddFormModaltoggle());
  };

  return (
    <Modal handleClose={closeModal} close title="Новый расход">
      <div className="expenses-add-form-modal">
        <div className="expenses-add-form-modal__inner">
          <form
            className="expenses-add-form-modal__body"
            onSubmit={handleSubmit}
          >
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

            <div className="expenses-add-form-modal__input">
              <Select
                placeholder="Выберите категорию"
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
                styles={
                  {
                    control: (provided, state) => ({
                      ...provided,
                      borderRadius: 16,
                    }),
                    valueContainer: (provided, state) => ({
                      padding: 0
                    })
                  }
                }
              />
            </div>

            <button className="btn">Добавить</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ExpensesAddFormModal;
