import React, { useState } from 'react';
import styles from '../HomeComponents/Plan.module.css';
import PlanD from '../PlanComponent/PlanD';

export default function Plan() {
  const [plan, setPlan] = useState('monthly')

  const desc1 = ['Three testimonies', 'Customer support', 'Free hosting']
  const desc2 = ['Upto 10 testimonies', 'Customer support', 'Money back guarantee']
  const desc3 = ['Unlimitted testimonies', 'Customer support', 'Money back guarantee']

  const planComponent = plan === 'monthly' ? (
    <div className={styles.toggleContainer}>
      <PlanD description={desc1} title={'Basic'} price={'$0.00'} time={'month'} />
      <PlanD description={desc2} title={'Pro'} price={'$10.00'} time={'month'} />
      <PlanD description={desc3} title={'Ultimate'} price={'$50.00'} time={'month'} />
    </div>) : (
      <div className={styles.toggleContainer}>
        <PlanD description={desc1} title={'Basic'} price={'$0.00'} time={'year'} />
        <PlanD description={desc2} title={'Pro'} price={'$100.00'} time={'year'} />
        <PlanD description={desc3} title={'Ultimate'} price={'$150.00'} time={'year'} />
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
