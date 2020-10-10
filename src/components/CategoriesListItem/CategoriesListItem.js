import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

import { ReactComponent as ForwardIcon } from "../../assets/forward.svg";
import "./CategoriesListItem.scss";

const CategoriesListItem = ({ name, сurrentCost, maxCost, id, cost }) => {
  return (
    <Card>
      <div className="categories-list-item">
        <div>
          <div className="categories-list-item__category">{name}</div>
          <div className="categories-list-item__money">{cost || 0} ₽</div>
        </div>
        <Link to={`/category/${id}`} className="categories-list-item__link">
          <ForwardIcon />
        </Link>
      </div>
    </Card>
  );
};

export default CategoriesListItem;
