import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import CategoriesList from "../../CategoriesList";
import ExpensesList from "../ExpensesList";
import Menu from "../../Menu";
import MainHeader from "../MainHeader";
import ExpensesAddFormModal from "../ExpensesAddFormModal";
import CategoriesAddFormModal from "../CategoriesAddFormModal";

import "./Main.scss";

const Main = () => {
  const modals = useSelector(({ modals }) => modals);
  console.log(modals.categoriesAddFormModal);
  return (
    <div className="main">
      <MainHeader />
      <Switch>
        <Route path="/category/:id" component={ExpensesList} />
        <Route path="/" component={CategoriesList} />
      </Switch>
      <Menu />
      {modals.expensesAddFormModal && <ExpensesAddFormModal />}
      {modals.categoriesAddFormModal && <CategoriesAddFormModal />}
    </div>
  );
};

export default Main;
