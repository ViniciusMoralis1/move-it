import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/viniciusmoralis1.png" alt="Vinicius Moralis" />
      <div>
        <strong>Vinicius Moralis</strong>
        <p>
          <img src="icons/level.svg" alt="leve" />
          Level 1
        </p>
      </div>
    </div>
  );
}