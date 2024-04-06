"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import LoadingSpinner from "../icons/LoadingSpinner";

type SubmitButtonProps = {
  isSubmitting: boolean;
  title: string;
};
const SubmitButton = ({ isSubmitting, title }: SubmitButtonProps) => {
  return (
    <Button disabled={isSubmitting} className="w-full mt-6" type="submit">
      {isSubmitting && <LoadingSpinner />}
      {isSubmitting ? "Loading..." : `${title}`}
    </Button>
  );
};

export default SubmitButton;
