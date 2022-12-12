import styles from "../styles/Contact.module.css";
import stylesScss from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <h2>Contact Page</h2>
      <button className="btn btn-success">Hello</button>
      <div className={styles.highlight}>Hello</div>
      <div className={stylesScss.highlightscss}>Scss</div>
    </>
  );
};

export default Contact;
