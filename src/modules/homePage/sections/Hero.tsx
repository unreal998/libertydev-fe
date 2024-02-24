import DotsAnimation from "../components/DotsAnimation";
import { motion, useMotionValue, useTransform } from "framer-motion";

import styles from "./Hero.module.css";
import IconsList from "../ui/IconsList";
import HeroBtn from "../ui/HeroBtn";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  return (
    <div className={styles.box}>
      <div className={styles.box_bg}></div>
      <DotsAnimation />
      <div className={styles.container}>
        <div className={styles.text_box}>
          <IconsList />
          <p className={styles.pre_title}>IT Solutions</p>
          <h1 className={styles.hero_title}>
            providing the best services & IT
            <span className={styles.featured_text}>
              {" "}
              Solutions
              <img src="/img/waveLine.svg" />{" "}
            </span>
            <span className={styles.design_element}></span>
          </h1>
          <p className={styles.hero_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            architecto dolorum inventore totam adipisci
          </p>
          <HeroBtn>Contact Us</HeroBtn>
        </div>
        <motion.div
          style={{
            perspective: 600,
          }}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            x.set(event.clientX - rect.left - rect.width / 2);
            y.set(event.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          <motion.img
            src="/img/hero.png"
            className={styles.img_box}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transition: "all 0.3s ease",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
