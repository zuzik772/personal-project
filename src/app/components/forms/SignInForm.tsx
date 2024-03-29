"use client";

import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GithubSignInButton from "../buttons/GithubSignInButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SignInFormSchema } from "@/app/utils/validationSchemas";
import { showErrorToast } from "@/app/utils/showErrorToast";
import { useState } from "react";
import LoadingSpinner from "../icons/LoadingSpinner";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInFormSchema>) => {
    setIsLoading(true);
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      showErrorToast();
    } else {
      router.push("/dashboard");
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
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
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isLoading} className="w-full mt-6" type="submit">
          {isLoading && <LoadingSpinner />}
          Sign in
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <GithubSignInButton />
      <p className="text-center text-sm mt-4">
        If you don&apos;t have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/signup">
          Sign up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
