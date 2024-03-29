import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateTaskForm from "./forms/CreateTaskForm";
import { FaPlus as CreateTaskIcon } from "react-icons/fa6";

const CreateTaskDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="text-md font-bold max-w-sm rounded-lg shadow-md border-2 border-primary900 border-dotted flex w-full gap-2 items-center justify-center px-6 py-4 hover:shadow-lg hover:border-solid cursor-pointer transition duration-300 ease-in-out">
          <CreateTaskIcon />
          New task
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
        </DialogHeader>

        <CreateTaskForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
