import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
  const { completed } = useContext(ChallengesContext)

  return (
    <div className={styles.completedContainer}>
      <span>Desafios completos</span>
      <span>{completed}</span>
    </div>
  );
}