"use client";
import TaskItem, { Task } from "./TaskItem";
import CreateTaskDialog from "../CreateTaskDialog";

type TasksProps = {
  title: string;
  tasks: Task[];
};
const Tasks = ({ title, tasks }: TasksProps) => {
  return (
    <>
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex flex-wrap gap-8 justify-center xl:justify-start">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
        <CreateTaskDialog />
      </div>
    </>
  );
};

export default Tasks;
