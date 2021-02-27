import React from 'react';
import intergrationImg from '../../Images/logocam.png'
import settingImg from '../../Images/setting.png'
import styles from '../../Components/HomeComponents/intergration.module.css';

export default function Intergration() {
  return (
    <div className={styles.intergrationContainer}>
      <div className={styles.intergrationRight}>Right section</div>
      <div className={styles.intergrationLeft}>
        <h1 className={styles.leftheader}>
          Get Clients to Give You Elaborate Testimonials
        </h1>
        <p className={styles.leftdescription}>
          Make your brand trustworthy and believable by recording videos.
          Videos may be accompamied with text descriptions.
        </p>
        <button className={styles.leftButtonFirst}>
          <img className={styles.intergrationImg} src={intergrationImg} alt="imgtext" />
          Record testimonial
        </button>
        <button className={styles.leftButtonSecond}>
          <img className={styles.settingImg} src={settingImg} alt="imgtext" />
        Easy to set up
        </button>
        <div></div>
      </div>
    </div>
  )
}
