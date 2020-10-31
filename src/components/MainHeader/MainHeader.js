import React from "react";

import "./MainHeader.scss";
import { useDispatch, useSelector } from "react-redux";

const MainHeader = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.expenses.currentCategoryName);

  return (
    <div className="main-header">
      <div className="main-header__title">
        {title ? title : "Расходы по категориям"}
      </div>
      <div className="main-header__money">230 495 ₽ / 500 000 ₽</div>
    </div>
  );
};

export default MainHeader;
