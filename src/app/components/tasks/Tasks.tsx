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
      <div className="absolute top-10 right-10">
        <CreateTaskDialog isTitle={false} />
      </div>
      <div className="flex flex-wrap gap-8 justify-center xl:justify-start pb-10">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
        <CreateTaskDialog isTitle={true} />
      </div>
    </>
  );
};

export default Tasks;
