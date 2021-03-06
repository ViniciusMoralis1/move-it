import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
  
  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? ( 
        <div className={styles.challengeActive}>
          <head>Ganhe {activeChallenge.amount} xp</head>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuccessedButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up"/>
            Avançe de level completando desafios.
          </p>   
        </div>
      )}
    </div>
  )
}