"use client";
import TaskItem, { Task } from "./TaskItem";
import CreateTaskDialog from "../CreateTaskDialog";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { TaskTitles } from "@/types/TaskTitles";
import Search from "../Search";

type TaskProps = {
  title: TaskTitles;
  query: string;
};
const Tasks = ({ query, title }: TaskProps) => {
  const { tasks } = useGlobalContext();

  const taskFilters: Record<TaskTitles, Task[]> = {
    [TaskTitles.All]: tasks,
    [TaskTitles.Important]: tasks.filter((task) => task.isImportant),
    [TaskTitles.New]: tasks.filter((task) => task.status === "NEW"),
    [TaskTitles.Completed]: tasks.filter((task) => task.status === "COMPLETED"),
    [TaskTitles.InProgress]: tasks.filter(
      (task) => task.status === "IN_PROGRESS"
    ),
  };

  let filteredTasks =
    taskFilters[title] || tasks.filter((task) => task.title.includes(title));

  if (query) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <>
      <h1 className="text-xl font-semibold mt-10 lg:text-start text-center">
        {title}
      </h1>
      <Search placeholder="Search tasks" />
      <div className="absolute lg:top-10 lg:right-10 top-4 right-4">
        <CreateTaskDialog isTitle={false} />
      </div>
      <div className="flex flex-wrap lg:gap-8 gap-6 justify-center xl:justify-start lg:pb-8 pb-6">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
        <CreateTaskDialog isTitle={true} />
      </div>
    </>
  );
};

export default Tasks;
