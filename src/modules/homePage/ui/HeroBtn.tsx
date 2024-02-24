import styles from "./HeroBtn.module.css";

const HeroBtn = ({ children }) => {
  return <button className={styles.hero_btn}>{children}</button>;
};

export default HeroBtn;
