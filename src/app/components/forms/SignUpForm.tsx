"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignUpFormSchema } from "@/app/utils/validationSchemas";
import axios, { AxiosError } from "axios";
import { User } from "@prisma/client";
import { useToastFunctions } from "../../utils/showToast";
import SubmitButton from "../buttons/SubmitButton";

interface ResponseData {
  user: User;
  message: string;
}

const SignUpForm = () => {
  const { showSuccessToast } = useToastFunctions();
  const router = useRouter();
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof SignUpFormSchema>) => {
    try {
      const response = await axios.post("/api/users", values);
      console.log(response, values);
      router.push("/api/auth/signin");
      showSuccessToast("User created");
    } catch (error) {
      const axiosError = error as AxiosError<ResponseData>;
      if (axiosError.response) {
        setError("root", {
          message: axiosError.response.data.message,
        });
      } else if (axiosError.request) {
        // The request was made but no response was received
        console.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", axiosError.message);
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="mail@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter your password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Re-Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SubmitButton
          isSubmitting={isSubmitting}
          title="Sign Up"
        ></SubmitButton>
        {errors.root && (
          <div className="text-red-500 text-sm mt-2">{errors.root.message}</div>
        )}
      </form>

      <p className="text-center text-sm text-gray-600 mt-2">
        If you already have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/signin">
          Sign in
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
