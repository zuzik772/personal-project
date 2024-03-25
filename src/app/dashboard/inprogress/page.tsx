"use client";
import Tasks from "@/app/components/tasks/Tasks";
import { useGlobalContext } from "../../context/GlobalContextProvider";

const InProgressTasks = () => {
  const { inProgressTasks } = useGlobalContext();
  return <Tasks title="In progress tasks" tasks={inProgressTasks} />;
};

export default InProgressTasks;
