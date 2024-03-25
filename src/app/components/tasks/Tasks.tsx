"use client";
import { Status } from "@prisma/client";
import TaskItem from "./TaskItem";
import CreateTaskDialog from "../CreateTaskDialog";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  isImportant: boolean;
};

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
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            isImportant={task.isImportant}
          />
        ))}
        <CreateTaskDialog />
      </div>
    </>
  );
};

export default Tasks;
