import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import githubLogo from "../../../public/github-mark-white.svg";

const GithubSignInButton = () => {
  return (
    <Button
      onClick={() =>
        signIn("github", { callbackUrl: "http://localhost:3000/" })
      }
      className="w-full gap-2"
    >
      <Image src={githubLogo} alt="Github logo" width="20" height="20" />
      Sign in with Github
    </Button>
  );
};

export default GithubSignInButton;
