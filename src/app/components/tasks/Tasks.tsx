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
      <h1 className="text-xl font-semibold mt-10 lg:text-start text-center">
        {title}
      </h1>
      <div className="absolute lg:top-10 lg:right-10 top-4 right-4">
        <CreateTaskDialog isTitle={false} />
      </div>
      <div className="flex flex-wrap lg:gap-8 gap-6 justify-center xl:justify-start lg:pb-8 pb-6">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
        <CreateTaskDialog isTitle={true} />
      </div>
    </>
  );
};

export default Tasks;
