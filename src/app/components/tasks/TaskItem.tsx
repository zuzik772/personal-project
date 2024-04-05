import { FaRegEdit as EditTaskIcon } from "react-icons/fa";
import DeleteTaskDialog from "./DeleteTaskDialog";
import { Status } from "@prisma/client";
import { MdNotificationImportant as ImportantIcon } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { set } from "date-fns";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  isImportant: boolean;
};

const TaskItem = ({ id, title, description, status, isImportant }: Task) => {
  const { updateImportantTask } = useGlobalContext();
  // const [important, setImportant] = useState<boolean>(isImportant);
  const handleSwitchChange = (newState: boolean) => {
    // newState is the new state of the switch
    // You can add your logic here to handle the state change
    updateImportantTask(id, newState);
    // setImportant(newState);
    console.log(newState);
  };
  return (
    <div className="max-w-sm rounded-lg shadow-md bg-primary300 text-white flex w-full gap-2 itemx-center justify-between px-6 py-4">
      <div>
        <p className="font-bold text-xl mb-2">{title}</p>
        <p className="mb-2">{description}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex gap-2 items-center justify-end">
          <Switch
            checked={isImportant}
            onCheckedChange={(e) => handleSwitchChange(e)}
          />
          {isImportant && (
            <>
              <ImportantIcon className="text-yellow-400 icon mt-0" />
            </>
          )}
          {/* <p className="text-sm font-semibold">{status}</p> */}
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
