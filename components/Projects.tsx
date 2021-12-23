import { useState } from "react";
import Add from "@/components/Add";
import styles from '@/styles/Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState<string[]>([]);

  const onProjectAddHandler = (name: string) => {
    if (name) {
      setProjects((prev) => prev.concat(name));
    }
  };

  return (
    <div className={styles.container}>
      <Add
        onAdd={onProjectAddHandler}
        placeholder='Project name'
        buttonTitle='Add'
      />
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
