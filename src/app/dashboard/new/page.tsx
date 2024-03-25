"use client";
import Tasks from "@/app/components/tasks/Tasks";
import { useGlobalContext } from "../../context/GlobalContextProvider";

const NewTasks = () => {
  const { newTasks } = useGlobalContext();
  return <Tasks title="New tasks" tasks={newTasks} />;
};

export default NewTasks;
