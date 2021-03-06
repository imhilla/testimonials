import React from 'react'
import styles from './Hero.module.css'
import heroimage from '../../Images/heroimage.jpg'
import videoimage from '../../Images/videoplayer.png'
import dotsimage from '../../Images/dotsone.png'
import dotstwoimage from '../../Images/dotstwo.png'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.heroHeader}>Collect testimonial videos from your favorite customers</h1>
        <p className={styles.heroDescription}>
          Give your audience what they're searching for With testimonials on Your website.
          We help you increase sales and growth.
         </p>
        <button className={styles.heroButton}>Start for free</button>
      </div>
      <div className={styles.rightContainer}>
        <img className={styles.videoimage} src={videoimage} alt="videoplayer" />
        <img className={styles.dotsimage} src={dotsimage} alt="dots" />
        <img className={styles.dotstwoimage} src={dotstwoimage} alt="dotstwo" />
        <div className={styles.trapezium}>
          <img className={styles.heroimage} src={heroimage} alt="nathan" />
        </div>
      </div>
    </div>
  )
}
