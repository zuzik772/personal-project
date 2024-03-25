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
import React from "react";

import LoadingSpinner from "../icons/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "../tasks/Tasks";

type CreateTaskFormProps = {
  form: any;
  isLoading: boolean;
  onSubmit: (values: Task) => void;
};
const CreateTaskForm = ({ form, isLoading, onSubmit }: CreateTaskFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        <div className="space-y-8">
          <FormField
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
          <Button disabled={isLoading} type="submit">
            {isLoading && <LoadingSpinner />}
            Create task
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateTaskForm;
