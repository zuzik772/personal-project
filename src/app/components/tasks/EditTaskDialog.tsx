"use client";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegEdit as EditTaskIcon } from "react-icons/fa";
import CreateTaskForm from "../forms/CreateTaskForm";
import UpdateTaskForm from "../forms/UpdateTaskForm";

type Props = {
  id: number;
};
const EditTaskDialog = ({ id }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <EditTaskIcon className="icon hover:scale-125" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Update task</DialogTitle>
        </DialogHeader>

        <UpdateTaskForm id={id} />
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
