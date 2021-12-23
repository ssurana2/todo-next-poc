import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Projects />
    </main>
  );
};

export default Home;
