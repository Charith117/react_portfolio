import React from 'react'
import styles from "./Hero.module.css";
import {getImageUrl} from"../../util";

const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi im Charith</h1>
        <p className={styles.descruption}>
            Im Full satck developer but im still lerning things so if you need im here
        </p>
        <a href="jayanithacharith7@gmail.com" className={styles.contactBtn}>Contact me</a>
        <div className={styles.mainBtns}>
        <a href="jayanithacharith7@gmail.com" className={styles.contactBtn}>Contact me</a>
        {/* <button href="jayanithacharith7@gmail.com" className={styles.DownloadBtn}></a> */}
        <button className={styles.DownloadBtn}>Download CV </button>
        </div>
       
    </div>
    <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Her" />
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );

};

export default Hero