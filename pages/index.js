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
        <div className={styles.pageContent}>
          {typeof user === "undefined" && <Loading />}
          {user === null && <Form onSend={handleFormSubmit} />}
          {user && Object.keys(user).length > 0 && (
            <Welcome user={user} onLogOut={logout} />
          )}
          <footer className={styles.footer}>
            Developed by{" "}
            <a href="https://github.com/gartnerleandro">gartnerleandro</a>.
            Design inspired by{" "}
            <a href="https://www.figma.com/community/file/1098926234598800271">
              mmekutmfon
            </a>
            .
          </footer>
        </div>
      </main>
    </div>
  );
}
