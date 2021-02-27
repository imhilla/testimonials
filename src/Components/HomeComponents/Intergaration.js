import React from 'react';
import intergrationImg from '../../Images/logocam.png'
import settingImg from '../../Images/setting.png'
import rightImg from '../../Images/womansmiling.jpg'
import contactImg from '../../Images/contact.png'
import micImg from '../../Images/mic.png'
import videoImg from '../../Images/rightcamera.png'
import dotedBottomImg from '../../Images/dotstwo.png';

import styles from '../../Components/HomeComponents/intergration.module.css';

export default function Intergration() {
  return (
    <div className={styles.intergrationContainer}>
      <div className={styles.intergrationRight}>
        <div className={styles.rightFade}>
          <div className={styles.rightContainer}>
            <img className={styles.rightImg} src={rightImg} alt="imgright" />
          </div>
          <div className={styles.itergrationImgContainer}>
            <img className={styles.contactImg} src={contactImg} alt="imgright" />
            <img className={styles.micImg} src={micImg} alt="imgright" />
            <img className={styles.videoImg} src={videoImg} alt="imgright" />
          </div>
          <img className={styles.dotedBottomImg} src={dotedBottomImg} alt="imgright" />
        </div>
      </div>
      <div className={styles.intergrationLeft}>
        <h1 className={styles.leftheader}>
          Let clients give you elaborate testimonials
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
