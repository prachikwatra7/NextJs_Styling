import styles from "../styles/About.module.css";
import stylesScss from "../styles/About.module.scss";

const About = () => {
  return (
    <>
      <h2>About Page</h2>
      <div className={styles.highlight}>Hello</div>
      <div className={stylesScss.highlightscss}>Scss</div>
    </>
  );
};

export default About;
