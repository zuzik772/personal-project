"use client";
import TaskItem, { Task } from "./TaskItem";
import CreateTaskDialog from "../CreateTaskDialog";
import { Reorder } from "framer-motion";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";

type TasksProps = {
  title: string;
  tasks: Task[];
};
const Tasks = ({ title, tasks }: TasksProps) => {
  const { setTasks } = useGlobalContext();
  return (
    <>
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="absolute top-10 right-10">
        <CreateTaskDialog isTitle={false} />
      </div>
      <Reorder.Group values={tasks} onReorder={setTasks}>
        {tasks.map((task) => (
          <Reorder.Item key={task.id} value={task}>
            <div className="flex flex-wrap gap-8 justify-center xl:justify-start pb-10">
              <TaskItem key={task.id} {...task} />
            </div>
          </Reorder.Item>
        ))}
        {/* {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))} */}
        <CreateTaskDialog isTitle={true} />
      </Reorder.Group>
    </>
  );
};

export default Tasks;
