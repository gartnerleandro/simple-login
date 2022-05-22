import styles from "../../styles/Welcome.module.css";

export default function Welcome({ user }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenid@ {user.name}!</h1>
      <p className={styles.subtitle}>Encantado de volver a verte por aquí.</p>
    </div>
  );
}
