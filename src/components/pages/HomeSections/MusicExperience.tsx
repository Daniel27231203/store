import React from 'react';
import styles from './MusicExperince.module.scss';
import speaker from '../../../assets/image/kolonka.png'

const MusicExperience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.category}>Categories</p>
        <h1 className={styles.title}>Enhance Your <br /> Music Experience</h1>
        <div className={styles.timer}>
          <div className={styles.timeBlock1}>
            <p className={styles.time}>23</p>
            <p className={styles.label}>Hours</p>
          </div>
          <div className={styles.timeBlock2}>
            <p className={styles.time}>05</p>
            <p className={styles.label}>Days</p>
          </div>
          <div className={styles.timeBlock3}>
            <p className={styles.time}>59</p>
            <p className={styles.label}>Minutes</p>
          </div>
          <div className={styles.timeBlock4}>
            <p className={styles.time}>35</p>
            <p className={styles.label}>Seconds</p>
          </div>
        </div>
        <button className={styles.button}>Buy Now!</button>
      </div>
      <div className={styles.imageContainer}>
      <img src={speaker.src}  alt="Music Speaker" className={styles.image} />
      </div>
    </div>
  );
};

export default MusicExperience;