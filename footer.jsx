import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className={`${styles.back} ${styles.resetMargin}`}>
        <p className="text-center  border-bottom">
          © 2024 BookAI. All rights reserved.
        </p>
        <ul
          className={` ${styles.textColor}  justify-content-center pb-3 mb-3`}>
          <li className="nav-item">
            <a href="#" className={`${styles.textColor} nav-link px-2 `}>
              Terms of Service
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`${styles.textColor} nav-link px-2 `}>
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`${styles.textColor} nav-link px-2 `}>
              Contact Us
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
export default Footer;
