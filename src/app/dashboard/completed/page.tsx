import Tasks from "@/app/components/tasks/Tasks";
import { TaskTitles } from "@/types/TaskTitles";
import { SearchParamsProps } from "../page";

const CompletedTasks = async ({ searchParams }: SearchParamsProps) => {
  const query = searchParams.query || "";

  return <Tasks title={TaskTitles.Completed} query={query} />;
};

export default CompletedTasks;
