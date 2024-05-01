import { TaskTitles } from "@/types/TaskTitles";
import Tasks from "../components/tasks/Tasks";

export type SearchParamsProps = {
  searchParams: { query: string };
};

const Dashboard = async ({ searchParams }: SearchParamsProps) => {
  const query = searchParams.query || "";

  return <Tasks title={TaskTitles.All} query={query} />;
};

export default Dashboard;
