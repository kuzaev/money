import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { db } from "./firebaseConfig";

import "./App.scss";

const App = () => {
  console.log(db);
  return (
    <div className="app">
      <Main />
      <Navbar />
    </div>
  );
};

export default App;
