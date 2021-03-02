import React from 'react';
import styles from '../PlanComponent/PlanD.module.css';
import tick from '../../Images/tick.png';

export default function PlanD(props) {
  // const logo1 = props.logo;
  const title = props.title;
  const description = props.description ? (<div className={styles.wonder}>{props.description.map((data) => (
    <div className={styles.descriptionC}>
      <img className={styles.tick} src={tick} alt="tick" />
      {data}
    </div>
  ))}<div className={styles.propPrice}>{props.price}</div><div className={styles.time}>Per/{props.time}</div></div>) : (<div />)

  return (
    <div className={styles.planCards}>
      {/* <h1>{logo1}</h1> */}
      <h2 className={styles.planHeader}>{title}</h2>
      {description}
    </div>
  )
}
