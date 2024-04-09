"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegEdit as EditTaskIcon } from "react-icons/fa";
import UpdateTaskForm from "../forms/UpdateTaskForm";
import { useState } from "react";

type Props = {
  id: number;
};
const EditTaskDialog = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <EditTaskIcon className="icon hover:scale-125" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Update task</DialogTitle>
        </DialogHeader>

        <UpdateTaskForm id={id} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
