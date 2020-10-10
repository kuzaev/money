import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import "./Menu.scss";
import { toggleMenu } from "../store/actions/menu";

const Menu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(({ menu }) => menu.isOpen);
  const menuRef = React.createRef();

  const handleToggleMenu = (e) => {
    if (e.target === menuRef.current) {
      dispatch(toggleMenu());
    }
  };

  return (
    <div
      className={classNames("menu", { "menu--open": isOpen })}
      onClick={handleToggleMenu}
      ref={menuRef}
    >
      <div className="menu__inner">
        <div className="">Управление категориями</div>
        <div className="">Выйти</div>
      </div>
    </div>
  );
};

export default Menu;
