import { FaRegEdit as EditTaskIcon } from "react-icons/fa";
import DeleteTaskDialog from "./DeleteTaskDialog";
import { Status } from "@prisma/client";
import { MdNotificationImportant as ImportantIcon } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { set } from "date-fns";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";
import { Dropdown } from "react-day-picker";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
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
  const { id, title, description, status, isImportant } = task;

  return (
    <div className="max-w-sm rounded-lg shadow-md bg-primary300 text-white flex w-full gap-2 itemx-center justify-between p-4">
      <div>
        <p className="flex items-center gap-2 font-bold text-xl mb-2">
          {isImportant && (
            <ImportantIcon className="text-yellow-400 icon mt-0" />
          )}
          {title}
        </p>
        <p className="mb-2">{description}</p>
      </div>

      <div className="flex flex-col justify-between ">
        <StatusDropdown id={id} status={status} />

        <div className="flex gap-4 justify-end">
          <EditTaskDialog id={id} />
          <DeleteTaskDialog id={id} />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
