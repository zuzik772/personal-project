import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "../utils/validationSchemas";
import { useState } from "react";
import CreateTaskForm from "./forms/CreateTaskForm";
import { showErrorToast } from "../utils/showErrorToast";
import { FaPlus as CreateTaskIcon } from "react-icons/fa6";

const CreateTaskDialog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: "",
      description: "",
      isImportant: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof TaskSchema>) => {
    setIsLoading(true);
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        isImportant: values.isImportant,
      }),
    });
    if (response.ok) {
      router.push("/dashboard/new");
    } else {
      setIsLoading(false);
      showErrorToast();
    }
  };

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

        <CreateTaskForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
