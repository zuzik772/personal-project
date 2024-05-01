import Tasks from "@/app/components/tasks/Tasks";
import { SearchParamsProps } from "../page";
import { TaskTitles } from "@/types/TaskTitles";

const InProgressTasks = async ({ searchParams }: SearchParamsProps) => {
  const query = searchParams.query || "";
  return <Tasks title={TaskTitles.InProgress} query={query} />;
};

export default InProgressTasks;
