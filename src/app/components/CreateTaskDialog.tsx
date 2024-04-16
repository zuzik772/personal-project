import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateTaskForm from "./forms/CreateTaskForm";
import { FaPlus as CreateTaskIcon } from "react-icons/fa6";
import { useState } from "react";

type Props = { isTitle: boolean };

const CreateTaskDialog = ({ isTitle }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="text-md font-bold max-w-[350px] flex w-full gap-2 items-center justify-center p-2 border-[1px] border-dashed border-primary900 hover:shadow-lg rounded-md cursor-pointer transition duration-300 ease-in-out">
          <CreateTaskIcon />
          {isTitle && "New task"}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
        </DialogHeader>
        <CreateTaskForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
