import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  const hasActiveChallenge = true;
  
  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? ( 
        <div className={styles.challengeActive}>
          <head>Ganhe 400 xp</head>

          <main>
            <img src="icons/body.svg" alt=""/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 10 minutos.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
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