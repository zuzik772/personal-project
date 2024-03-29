"use client";
import Tasks from "@/app/components/tasks/Tasks";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { Status } from "@prisma/client";

const InProgressTasks = () => {
  const { tasks } = useGlobalContext();
  const inProgressTasks = tasks.filter(
    (task) => task.status === Status.IN_PROGRESS
  );
  return <Tasks title="In progress tasks" tasks={inProgressTasks} />;
};

export default InProgressTasks;
