import DeleteTaskDialog from "./DeleteTaskDialog";
import { Status } from "@prisma/client";
import { MdNotificationImportant as ImportantIcon } from "react-icons/md";
import StatusDropdown from "./StatusDropdown";
import EditTaskDialog from "./EditTaskDialog";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  isImportant: boolean;
};

const TaskItem = (task: Task) => {
  const { id, title, description, isImportant } = task;

  return (
    <div className="relative max-w-[350px] rounded-lg shadow-md bg-primary300 text-white flex w-full gap-2 itemx-center justify-between lg:p-4 p-3">
      <div>
        <p className="flex items-center gap-2 font-bold text-lg mb-2">
          {isImportant && (
            <ImportantIcon className="text-yellow-400 icon mt-0" />
          )}
          {title}
        </p>
        <p className="mb-2 text-sm">{description}</p>
      </div>

      <div className="absolute top-2 right-2 flex flex-col justify-between">
        <StatusDropdown {...task} />
      </div>
      <div className="flex items-end gap-2">
        <EditTaskDialog id={id} />
        <DeleteTaskDialog id={id} />
      </div>
    </div>
  );
};

export default TaskItem;
