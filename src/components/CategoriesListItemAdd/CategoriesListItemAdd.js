import React from "react";

import { categoriesAddFormModaltoggle } from "../../store/actions/modals";
import { useDispatch } from "react-redux";
import Card from "../Card";

import "./CategoriesListItemAdd.scss";

const CategoriesListItemAdd = () => {
  const dispatch = useDispatch();

  const addCategory = () => {
    dispatch(categoriesAddFormModaltoggle());
  };

  return (
    <Card onClick={addCategory}>
      <span class="categories-list-item-add">Новая категория</span>
    </Card>
  );
};

export default CategoriesListItemAdd;
