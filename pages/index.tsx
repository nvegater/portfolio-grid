import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolás Vega Terrazas | Portfolio</title>
        <meta name="description" content="Portfolio of Nicolas Vega Terrazas" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          CSS Stuffffffffffffffffffffffffffffffff
        </h1>
        <div className={styles.portfolio}>
          <div className={`${styles.square} ${styles.sqrbgimg}`}>one</div>
          <div className={styles.large}>two</div>
          <div className={styles.square}>three</div>
          <div className={styles.smallsquare}>four</div>
          <div className={styles.tall}>five</div>
          <div className={styles.wide}>six</div>
        </div>
      </main>
    </div>
  );
};
export default Home;
