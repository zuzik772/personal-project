"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";

import { TaskSchema } from "../utils/validationSchemas";
import { z } from "zod";
import { Task } from "../components/tasks/TaskItem";
import { useToastFunctions } from "../utils/showToast";

type GlobalContextProps = {
  tasks: Task[];
  createTask: (task: z.infer<typeof TaskSchema>) => Promise<any>;
  updateTask: (
    id: number,
    task: Task | z.infer<typeof TaskSchema>
  ) => Promise<Task>;
  deleteTask: (id: number) => void;
};

type State = {
  tasks: Task[];
};

type Action =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    case "ADD_TASK":
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);
export const GlobalUpdateContext = createContext({});

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const { showSuccessToast, showErrorToast } = useToastFunctions();

  const allTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      dispatch({ type: "SET_TASKS", payload: res.data });
    } catch (error) {
      console.error("Failed to fetch tasks", error);
      showErrorToast();
    }
  };

  const createTask = async (task: z.infer<typeof TaskSchema>) => {
    try {
      const res = await axios.post("/api/tasks", task);
      dispatch({ type: "ADD_TASK", payload: res.data });
      showSuccessToast("Task created");
      return res;
    } catch (error) {
      console.error("Failed to create task", error);
      showErrorToast();
    }
  };

  const updateTask = async (
    id: number,
    task: Task | z.infer<typeof TaskSchema>
  ) => {
    try {
      const req = await axios.put(`/api/tasks/${id}`, { task });
      console.log("req.data", req.data);
      dispatch({ type: "UPDATE_TASK", payload: req.data });
      showSuccessToast("Task updated");
      return req.data;
    } catch (error) {
      console.error("Failed to update task", error);
      showErrorToast();
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      dispatch({ type: "DELETE_TASK", payload: id });
      showSuccessToast("Task deleted");
    } catch (error) {
      console.error("Failed to delete task", error);
      showErrorToast();
    }
  };

  useEffect(() => {
    allTasks();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalUpdateContext = () => useContext(GlobalUpdateContext);

export default GlobalContextProvider;
