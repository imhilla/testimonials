import React, { useState } from 'react';
import styles from '../HomeComponents/Plan.module.css';
import PlanD from '../PlanComponent/PlanD';

export default function Plan() {
  const [plan, setPlan] = useState('monthly')

  const planComponent = plan === 'monthly' ? (
    <div className={styles.toggleContainer}>
      <PlanD />
      <PlanD />
      <PlanD />
    </div>) : (
      <div className={styles.toggleContainer}>
        <PlanD />
        <PlanD />
        <PlanD />
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
