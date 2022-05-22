import styles from "../../styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={`${styles.title} ${styles.withAnimation}`} />
        <p className={`${styles.subtitle} ${styles.withAnimation}`} />
        <button
          className={`${styles.loguOutButton} ${styles.withAnimation}`}
          disabled
        />
      </div>
    </div>
  );
}
