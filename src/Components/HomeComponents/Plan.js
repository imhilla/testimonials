import React, { useState } from 'react';
import styles from '../HomeComponents/Plan.module.css';
import PlanD from '../PlanComponent/PlanD';

export default function Plan() {
  const [plan, setPlan] = useState('monthly')

  const desc1 = ['Three testimonies', 'Customer support']
  const desc2 = ['Upto 10 testimonies', 'customer support', 'Money back guarantee']
  const desc3 = ['Unlimitted testimonies', 'Priority customer support', 'Money back guarantee']

  const planComponent = plan === 'monthly' ? (
    <div className={styles.toggleContainer}>
      <PlanD description={desc1} title={'Basic'} price={'$0'} />
      <PlanD description={desc2} title={'Pro'} price={'$10'}  />
      <PlanD description={desc3} title={'Ultimate'} price={'$50'}  />
    </div>) : (
      <div className={styles.toggleContainer}>
        <PlanD description={desc1} title={'Basic'} price={'$0'}  />
        <PlanD description={desc2} title={'Pro'} price={'$100'}  />
        <PlanD description={desc3} title={'Ultimate'} price={'$150'}  />
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
