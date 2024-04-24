import Tasks from "@/app/components/tasks/Tasks";
import { TaskTitles } from "@/types/TaskTitles";

const NewTasks = () => {
  return <Tasks title={TaskTitles.New} />;
};

export default NewTasks;
