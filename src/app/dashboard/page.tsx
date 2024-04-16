"use client";
import Tasks from "../components/tasks/Tasks";
import { useGlobalContext } from "../context/GlobalContextProvider";

const Dashboard = () => {
  const { tasks } = useGlobalContext();
  return <Tasks title="All tasks" tasks={tasks} />;
};

export default Dashboard;
