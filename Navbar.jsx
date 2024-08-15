import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ handleClick }) => {
  return (
    <>
      <body className={styles.page}>
        <header
          className={`${styles.page} d-flex flex-wrap align-items-center justify-content-center justify-content-md-between`}>
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex text-decoration-none">
              <div className={styles.circle}></div>
              <img src="logo.png" alt="logo" className={styles.logo} />
              <p className={styles.para}>BookAI</p>
            </a>
          </div>

          <ul className="nav justify-content-center ">
            <li>
              <a
                href="/"
                className={`${styles.head_names} ${styles.border}  ${styles.gap} nav `}>
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`${styles.head_names} ${styles.border} nav px-3 `}>
                How it works?
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`${styles.head_names} ${styles.border} nav px-3 `}>
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`${styles.head_names} ${styles.border} nav px-3 `}>
                API
              </a>
            </li>
            <li>
              <Link
                to="/Price"
                className={`${styles.head_names} ${styles.border} nav px-3 `}
                onClick={() => handleClick("Price")}>
                Price
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.head_names} ${styles.border} nav px-3 `}>
                Models
              </a>
            </li>

            <Link to="/Login">
              <button
                type="button"
                className={`${styles.Button} btn-success`}
                onClick={() => handleClick("Login")}>
                Login/Sign-up
              </button>
            </Link>
          </ul>
        </header>
      </body>
    </>
  );
};

export default NavBar;
