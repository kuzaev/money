import React, { useState } from "react";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { categoriesAddFormModaltoggle } from "../../store/actions/modals";

import { db } from "../../firebaseConfig";
import { addCategory } from "../../store/actions/categories";

const CategoriesAddFormModal = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: null,
  });

  const handleInputChange = (e) => {
    let { name, value } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    let category = { ...data };
    e.preventDefault();
    db.collection("categories")
      .add(category)
      .then((docRef) => {
        dispatch(addCategory({ ...category, id: docRef.id }));
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(categoriesAddFormModaltoggle());
  };

  return (
    <div className="expenses-add-form-modal">
      <div className="expenses-add-form-modal__inner">
        <div className="expenses-add-form-modal__header">
          <div className="expenses-add-form-modal__title">Новая категория</div>
          <X
            color="white"
            size={32}
            onClick={() => {
              dispatch(categoriesAddFormModaltoggle());
            }}
          />
        </div>
        <form className="expenses-add-form-modal__body" onSubmit={handleSubmit}>
          <div className="expenses-add-form-modal__input">
            <input
              name="name"
              type="text"
              placeholder="Введите название"
              onChange={handleInputChange}
            />
          </div>
          <button className="btn">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default CategoriesAddFormModal;
