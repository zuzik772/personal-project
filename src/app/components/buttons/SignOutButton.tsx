"use client";
import { useState } from "react";
import { FaSignOutAlt as SignOutIcon } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import LoadingSpinner from "../icons/LoadingSpinner";

const SignOutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({ callbackUrl: "/signin" });
    } catch (error) {
      console.error("Failed to sign out", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button disabled={isLoading} onClick={handleSignOut}>
      {isLoading ? <LoadingSpinner /> : <SignOutIcon className="mr-2" />}
      Sign out
    </Button>
  );
};

export default SignOutButton;
