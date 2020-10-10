import React, { useEffect } from "react";
import CategoriesListItem from "./components/CategoriesListItem";
import CategoriesListItemAdd from "./components/CategoriesListItemAdd/CategoriesListItemAdd";

import data from "./data.json";
import { setCategoriesList } from "./store/actions/categories";

import { useSelector, useDispatch } from "react-redux";
import { db } from "./firebaseConfig";
import { useParams } from "react-router-dom";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(({ categories }) => categories);

  useEffect(() => {
    db.collection("categories")
      .get()
      .then((querySnapshot) => {
        let docs = [];

        querySnapshot.forEach((doc) => {
          let categoryData = doc.data();
          let categoryId = doc.id;

          docs.push({ ...categoryData, id: categoryId });
        });
        dispatch(setCategoriesList(docs));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="categories-list">
      {list.length > 0 &&
        list.map((item) => <CategoriesListItem key={item.id} {...item} />)}

      {list.length === 0 && <p>Категорий нет.</p>}
      <CategoriesListItemAdd />
    </div>
  );
};

export default CategoriesList;
