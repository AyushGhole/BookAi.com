import styles from "./loginpage.module.css";
import { Link } from "react-router-dom";

function Login({ handleClick }) {
  return (
    <>
      <div className={`${styles.adjust} col-md-10 mx-auto col-lg-5`}>
        <form className="p-4 p-md-5 border rounded-3 ">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                value="remember-me"
                className={styles.input}
              />
              <p className={styles.para1}>Remember me</p>
            </label>
          </div>
          <Link to="/">
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={() => handleClick("Home")}>
              Sign up
            </button>
          </Link>
          <hr className="my-4" />
          <small className={styles.para1}>
            By clicking Sign up, you agree to the terms of use.
          </small>
        </form>
      </div>
    </>
  );
}

export default Login;
