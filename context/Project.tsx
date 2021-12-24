import { createContext, Dispatch, ReactNode, useReducer } from "react";

enum Status {
  ACTIVE,
  COMPLETED,
}

export enum ActionType {
  ADD_PROJECT,
  DELETE_PROJECT,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  MARK_TODO_COMPLETE,
  MARK_TODO_ACTIVE,
}

interface Todo {
  id: number;
  name: string;
  status: Status;
}

interface Project {
  id: number;
  name: string;
  todos: Todo[];
}

interface Action {
  type: ActionType;
  payload: unknown;
}

interface Context {
  projects: Project[];
  dispatch: Dispatch<Action>;
}

const ProjectContext = createContext<Context>({
  projects: [],
  dispatch: () => null,
});

interface Props {
  children: ReactNode | ReactNode[];
}

function reducer(state: Project[], action: Action) {
  switch (action.type) {
    case ActionType.ADD_PROJECT: {
      const name = action.payload as string;
      return state.concat({ id: Date.now(), name, todos: [] });
    }
    case ActionType.DELETE_PROJECT: {
      const id = action.payload as number;
      return state.filter((project) => project.id !== id);
    }
    case ActionType.ADD_TODO: {
      const { projectId, name } = action.payload as {
        projectId: number;
        name: string;
      };
      return state.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            todos: project.todos.concat({
              id: Date.now(),
              name,
              status: Status.ACTIVE,
            }),
          };
        }
        return { ...project };
      });
    }
    case ActionType.UPDATE_TODO: {
      const { projectId, todoId, name } = action.payload as {
        projectId: number;
        todoId: number;
        name: string;
      };
      return state.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            todos: project.todos.map((todo) =>
              todo.id === todoId ? { ...todo, name } : { ...todo }
            ),
          };
        }
        return { ...project };
      });
    }
    case ActionType.DELETE_TODO: {
      const { projectId, todoId } = action.payload as {
        projectId: number;
        todoId: number;
      };
      return state.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            todos: project.todos.filter((todo) => todo.id === todoId),
          };
        }
        return { ...project };
      });
    }
    case ActionType.MARK_TODO_ACTIVE: {
      const { projectId, todoId } = action.payload as {
        projectId: number;
        todoId: number;
      };
      return state.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            todos: project.todos.map((todo) =>
              todo.id === todoId
                ? { ...todo, status: Status.COMPLETED }
                : { ...todo }
            ),
          };
        }
        return { ...project };
      });
    }
    case ActionType.MARK_TODO_ACTIVE: {
      const { projectId, todoId } = action.payload as {
        projectId: number;
        todoId: number;
      };
      return state.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            todos: project.todos.map((todo) =>
              todo.id === todoId
                ? { ...todo, status: Status.ACTIVE }
                : { ...todo }
            ),
          };
        }
        return { ...project };
      });
    }
    default: {
      return [...state];
    }
  }
}

export const ProjectContextProvider = ({ children }: Props) => {
  const [projects, dispatch] = useReducer(reducer, []);

  return (
    <ProjectContext.Provider value={{ projects, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
