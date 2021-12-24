import LeftNavigation from "@/components/LeftNavigation";
import { ProjectContextProvider } from "context/Project";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <ProjectContextProvider>
      <main className={styles.container}>
        <LeftNavigation />
      </main>
    </ProjectContextProvider>
  );
};

export default Home;
