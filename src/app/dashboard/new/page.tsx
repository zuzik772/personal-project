import Tasks from "@/app/components/tasks/Tasks";
import { TaskTitles } from "@/types/TaskTitles";
import { SearchParamsProps } from "../page";

const NewTasks = async ({ searchParams }: SearchParamsProps) => {
  const query = searchParams.query || "";

  return <Tasks title={TaskTitles.New} query={query} />;
};

export default NewTasks;
