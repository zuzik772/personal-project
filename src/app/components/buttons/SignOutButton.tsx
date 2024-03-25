"use client";
import { FaSignOutAlt as SignOutIcon } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button onClick={() => signOut()}>
      <SignOutIcon className="mr-2" />
      Sign out
    </Button>
  );
};

export default SignOutButton;
