import React, { useState } from 'react';
import styles from '../HomeComponents/Plan.module.css'

export default function Plan() {
  const [plan, setPlan] = useState(false)

  const planComponent = plan === false ? (<div>Yes</div>) : (<div>no</div>)

  return (
    <div className={styles.planContainer}>
      <h1 className={styles.planHeader}>Choose a plan that's right for you</h1>
      <h2 className={styles.planHeaderTwo}>We offer yearly and monthly based subscription</h2>
      <div className={styles.planBButton}>
        <button className={styles.planButton} onClick={() => setPlan(true)}>
          Monthly
        </button>
        <button className={styles.planButton} onClick={()=> setPlan(false)}>
          Yearly
        </button>
      </div>
      <div>{planComponent}</div>
    </div>
  )
}
