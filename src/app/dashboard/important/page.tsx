import Tasks from "@/app/components/tasks/Tasks";
import { TaskTitles } from "@/types/TaskTitles";

const ImportantTasks = () => {
  return <Tasks title={TaskTitles.Important} />;
};

export default ImportantTasks;
