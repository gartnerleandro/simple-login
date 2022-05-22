import styles from "../../styles/Welcome.module.css";

export default function Welcome({ user, onLogOut }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Bienvenid@ {user.name}!</h1>
        <p className={styles.subtitle}>Encantado de volver a verte por aquí.</p>
        <button className={styles.loguOutButton} onClick={onLogOut}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
