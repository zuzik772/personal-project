"use client";
import Tasks from "@/app/components/tasks/Tasks";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { Status } from "@prisma/client";

const NewTasks = () => {
  const { tasks } = useGlobalContext();
  const newTasks = tasks.filter((task) => task.status === Status.NEW);
  return <Tasks title="New tasks" tasks={newTasks} />;
};

export default NewTasks;
