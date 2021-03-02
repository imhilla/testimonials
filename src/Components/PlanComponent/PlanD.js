import React from 'react';
import styles from '../PlanComponent/PlanD.module.css';
import tick from '../../Images/tick.png';

export default function PlanD(props) {
  // const logo1 = props.logo;
  const title = props.title;
  const description = props.description ? (<div>{props.description.map((data) => (
    <div><img className={styles.tick} src={tick} alt="tick" />{data}</div>
  ))}</div>) : (<div />)

  return (
    <div className={styles.planCards}>
      {/* <h1>{logo1}</h1> */}
      <h2>{title}</h2>
      <div>
        {description}
      </div>
    </div>
  )
}
