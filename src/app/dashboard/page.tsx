import { TaskTitles } from "@/types/TaskTitles";
import Tasks from "../components/tasks/Tasks";

const Dashboard = () => {
  return <Tasks title={TaskTitles.All} />;
};

export default Dashboard;
