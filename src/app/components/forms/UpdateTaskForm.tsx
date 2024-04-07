import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import LoadingSpinner from "../icons/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";
import { useRouter } from "next/navigation";
import { TaskSchema } from "@/app/utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useEffect } from "react";
import StatusDropdown from "../tasks/StatusDropdown";

type Props = {
  id: number;
};

const UpdateTaskForm = ({ id }: Props) => {
  const { updateTask } = useGlobalContext();
  const router = useRouter();
  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`/api/tasks/${id}`);
        console.log(res.data);
        reset(res.data); // set the default values to the fetched task
      } catch (error) {
        console.error("Failed to fetch task", error);
      }
    };

    fetchTask();
  }, [reset, id]);

  const onSubmit = async (values: z.infer<typeof TaskSchema>) => {
    await updateTask(id, values);
    router.push("/dashboard/new");
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
        <div className="space-y-8">
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl className="border-gray-400 mt-1">
                  <Input
                    placeholder="Enter your title"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  {...field}
                  id="description"
                  className="border-gray-400 mt-1"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="isImportant"
            render={({ field }) => (
              <FormItem className="flex items-center gap-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="w-5 h-5"
                  />
                </FormControl>
                <FormLabel className="text-md">Mark as important</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting && <LoadingSpinner />}
            Update task
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateTaskForm;
