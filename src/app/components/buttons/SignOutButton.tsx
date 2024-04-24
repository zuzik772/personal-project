import { TiPower as SignOutIcon } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button
      variant="default"
      onClick={async () => {
        await signOut({ callbackUrl: "/signin" });
      }}
      className={"absolute bottom-8 flex items-center"}
    >
      <SignOutIcon className="w-7 h-7" />
      Sign out
    </Button>
  );
};

export default SignOutButton;
