"use client";
import Tasks from "@/app/components/tasks/Tasks";
import { useGlobalContext } from "../../context/GlobalContextProvider";

const ImportantTasks = () => {
  const { importantTasks } = useGlobalContext();
  return <Tasks title="Important tasks" tasks={importantTasks} />;
};

export default ImportantTasks;
