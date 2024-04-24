import Tasks from "@/app/components/tasks/Tasks";
import { TaskTitles } from "@/types/TaskTitles";

const CompletedTasks = () => {
  return <Tasks title={TaskTitles.Completed} />;
};

export default CompletedTasks;
