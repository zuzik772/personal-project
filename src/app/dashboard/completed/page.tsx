"use client";
import Tasks from "@/app/components/tasks/Tasks";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { Status } from "@prisma/client";

const CompletedTasks = () => {
  const { tasks } = useGlobalContext();
  const completedTasks = tasks.filter(
    (task) => task.status === Status.COMPLETED
  );
  return <Tasks title="Completed tasks" tasks={completedTasks} />;
};

export default CompletedTasks;
