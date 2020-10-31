import React from "react";
import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import Card from "../Card";

import "./ExpensesListItem.scss";

const ExpensesListItem = ({ id, cost, categoryId, text }) => {
  // debugger;
  const { list } = useSelector(({ categories }) => categories);
  const category = list.find((category) => category.id === categoryId);

  // if (!category) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Card>
      <div className="expenses-list-item">
        <div className="expenses-list-item__category-name">{category ? category.name: 'Упс...'}</div>
        <div className="expenses-list-item__category-cost">{cost} ₽</div>
      </div>
    </Card>
  );
};

export default ExpensesListItem;
