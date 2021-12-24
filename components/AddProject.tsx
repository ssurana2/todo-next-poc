import { useContext } from "react";
import Add from "@/components/Add";
import styles from "@/styles/Projects.module.css";
import ProjectContext, { ActionType } from "@/context/Project";

const AddProject = () => {
  const { projects, dispatch } = useContext(ProjectContext);

  const onProjectAddHandler = (name: string) => {
    if (name) {
      dispatch({ type: ActionType.ADD_PROJECT, payload: name });
    }
  };

  return (
    <div className={styles.container}>
      <Add
        onAdd={onProjectAddHandler}
        placeholder="Project name"
        buttonTitle="Add"
      />
      <ul className={styles.list}>
        {projects.map((project) => (
          <li className={styles.listItem} key={project.id}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProject;
