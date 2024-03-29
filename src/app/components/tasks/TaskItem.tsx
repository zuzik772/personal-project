import { FaRegEdit as EditTaskIcon } from "react-icons/fa";
import DeleteTaskDialog from "./DeleteTaskDialog";
import { Status } from "@prisma/client";
import { MdNotificationImportant as ImportantIcon } from "react-icons/md";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  isImportant: boolean;
};

const TaskItem = ({ id, title, description, status, isImportant }: Task) => {
  return (
    <div className="max-w-sm rounded-lg shadow-md bg-primary300 text-black flex w-full gap-2 itemx-center justify-between px-6 py-4 hover:shadow-lg hover:bg-primary400 transition duration-300 ease-in-out">
      <div>
        <p className="font-bold text-xl mb-2">{title}</p>
        <p className="text-white mb-2">{description}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex gap-2 items-center justify-end">
          {isImportant && (
            <>
              {/* <Switch checked={field.value} onCheckedChange={field.onChange} /> */}

              <ImportantIcon className="text-yellow-400 icon mt-0" />
            </>
          )}
          <p className="text-sm font-semibold">{status}</p>
        </div>
        <div className="flex gap-4 justify-end">
          <EditTaskIcon className="icon hover:scale-125" />
          <DeleteTaskDialog id={id} />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
