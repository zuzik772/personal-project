"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import LoadingSpinner from "../components/icons/LoadingSpinner";
import { Task } from "../components/tasks/Tasks";
import { showErrorToast } from "../utils/showErrorToast";
import { Status } from "@prisma/client";

type GlobalContextProps = {
  tasks: Task[];
  newTasks: Task[];
  inProgressTasks: Task[];
  completedTasks: Task[];
  importantTasks: Task[];
  deleteTask: (id: number) => void;
};

const Context: GlobalContextProps = {
  tasks: [],
  newTasks: [],
  inProgressTasks: [],
  completedTasks: [],
  importantTasks: [],
  deleteTask: (id: number) => {},
};

export const GlobalContext = createContext(Context as GlobalContextProps);
export const GlobalUpdateContext = createContext({});
const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");
      setTasks(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
      showErrorToast();
    }
  };

  const importantTasks = tasks.filter((task: Task) => task.isImportant);
  const newTasks = tasks.filter((task: Task) => task.status === Status.NEW);

  const inProgressTasks = tasks.filter(
    (task: Task) => task.status === Status.IN_PROGRESS
  );

  const completedTasks = tasks.filter(
    (task: Task) => task.status === Status.COMPLETED
  );

  const deleteTask = async (id: number) => {
    try {
      const res = await axios.delete(`/api/tasks/${id}`);
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
  }, [tasks]);

  isLoading && <LoadingSpinner />;

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        newTasks,
        inProgressTasks,
        completedTasks,
        importantTasks,
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
