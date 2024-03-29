"use client";
import Tasks from "@/app/components/tasks/Tasks";
import { useGlobalContext } from "../../context/GlobalContextProvider";

const ImportantTasks = () => {
  const { tasks } = useGlobalContext();
  const importantTasks = tasks.filter((task) => task.isImportant);
  return <Tasks title="Important tasks" tasks={importantTasks} />;
};

export default ImportantTasks;
