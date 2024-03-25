"use client";
import Tasks from "@/app/components/tasks/Tasks";
import { useGlobalContext } from "../../context/GlobalContextProvider";

const CompletedTasks = () => {
  const { completedTasks } = useGlobalContext();
  return <Tasks title="Completed tasks" tasks={completedTasks} />;
};

export default CompletedTasks;
