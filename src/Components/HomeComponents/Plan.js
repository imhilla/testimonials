import React, { useState } from 'react';
import styles from '../HomeComponents/Plan.module.css';
import PlanD from '../PlanComponent/PlanD';

export default function Plan() {
  const [plan, setPlan] = useState('monthly')

  const desc1 = ['Three testimonies', ]
  const desc2 = ['unlimitted number of testimonies', 'customer support', 'Money back guarantee']
  const desc3 = ['Unlimitted number of testimonies', 'Priority customer support', 'Money back guarantee']

  const planComponent = plan === 'monthly' ? (
    <div className={styles.toggleContainer}>
      <PlanD description={desc1} />
      <PlanD description={desc2} />
      <PlanD description={desc3} />
    </div>) : (
      <div className={styles.toggleContainer}>
        <PlanD description={desc1} />
        <PlanD description={desc1} />
        <PlanD description={desc1} />
      </div>)

  return (
    <div className={styles.planContainer}>
      <h1 className={styles.planHeader}>Choose a plan that's right for you</h1>
      <h2 className={styles.planHeaderTwo}>We offer yearly and monthly based subscription</h2>
      <div className={styles.planBButton}>
        <button className={styles.planButton} onClick={() => setPlan('monthly')}>
          Monthly
        </button>
        <button className={styles.planButton} onClick={() => setPlan('yearly')}>
          Yearly
        </button>
      </div>
      <div className={styles.planTogle}>{planComponent}</div>
    </div>
  )
}
