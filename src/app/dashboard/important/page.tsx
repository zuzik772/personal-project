import Tasks from "@/app/components/tasks/Tasks";
import { TaskTitles } from "@/types/TaskTitles";
import { SearchParamsProps } from "../page";

const ImportantTasks = async ({ searchParams }: SearchParamsProps) => {
  const query = searchParams.query || "";

  return <Tasks title={TaskTitles.Important} query={query} />;
};

export default ImportantTasks;
