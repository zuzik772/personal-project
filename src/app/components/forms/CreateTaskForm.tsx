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

const CreateTaskForm = ({}) => {
  const { createTask } = useGlobalContext();
  const router = useRouter();
  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: "",
      description: "",
      isImportant: false,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof TaskSchema>) => {
    await createTask(values);
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
                <FormLabel htmlFor="description">Your message</FormLabel>
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
            Create task
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateTaskForm;
