import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Footer from "./components/footer";
import styles from "./App.module.css";

import { Outlet } from "react-router-dom";

function App() {
  let [handleClick, setHandleClick] = useState("Home");
  return (
    <>
      <NavBar handleClick={setHandleClick} />
      <div className={styles.mainBack}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
