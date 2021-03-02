import React from 'react';
import styles from '../PlanComponent/PlanD.module.css'

export default function PlanD(props) {
  // const logo1 = props.logo;
  const logo2 = props.logo2;
  const title = props.title;
  const description = props.description ? (<div>{props.description.map((data) => (
    <div>{data}</div>
  ))}</div>) : (<div />)

  return (
    <div className={styles.planCards}>
      {/* <h1>{logo1}</h1> */}
      <h2>{title}</h2>
      <div>
        <div>{logo2}</div>
        {description}
      </div>
    </div>
  )
}
