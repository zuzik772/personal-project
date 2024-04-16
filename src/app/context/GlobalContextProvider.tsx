"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

import { showErrorToast } from "../utils/showErrorToast";
import { TaskSchema } from "../utils/validationSchemas";
import { z } from "zod";
import { Task } from "../components/tasks/TaskItem";

type GlobalContextProps = {
  tasks: Task[];
  createTask: (task: z.infer<typeof TaskSchema>) => Promise<any>;
  updateTask: any;
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
      //setTasks((prevTasks) => [res.data, ...prevTasks]);
      dispatch({ type: "ADD_TASK", payload: res.data });
      toast({
        title: "Success",
        description: "Task created successfully",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
      return res;
    } catch (error) {
      console.error("Failed to create task", error);
      showErrorToast();
    }
  };

  const updateTask = async (id: number, task: Task) => {
    try {
      const req = await axios.put(`/api/tasks/${id}`, { task });
      console.log("req.data", req.data);
      // setTasks((prevTasks) =>
      //   prevTasks.map((t) => (t.id === id ? { ...t, ...task } : t))
      // );
      dispatch({ type: "UPDATE_TASK", payload: req.data });
      toast({
        title: "Success",
        description: "Task updated successfully",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
      return req.data;
    } catch (error) {
      console.error("Failed to update task", error);
      showErrorToast();
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      // setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      dispatch({ type: "DELETE_TASK", payload: id });
      toast({
        title: "Success",
        description: "Task deleted successfully",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
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
