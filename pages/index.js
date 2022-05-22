import Head from "next/head";

import Brand from "../components/Brand";
import Form from "../components/Form";

import styles from "../styles/Home.module.css";
import useSignup from "../hooks/useSignup";
import Welcome from "../components/Welcome";
import Loading from "../components/Loading";

export default function Home() {
  const { user, signup, logout } = useSignup();

  function handleFormSubmit(data) {
    signup(data);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Signup</title>
        <meta name="description" content="Simple signup design using nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Brand />
        {typeof user === "undefined" && <Loading />}
        {user === null && <Form onSend={handleFormSubmit} />}
        {user && Object.keys(user).length > 0 && (
          <Welcome user={user} onLogOut={logout} />
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
