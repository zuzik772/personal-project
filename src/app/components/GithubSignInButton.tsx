import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import githubLogo from "../../../public/github-mark-white.svg";
import { useState } from "react";
import LoadingSpinner from "./icons/LoadingSpinner";

const GithubSignInButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginWithGithub = async () => {
    try {
      setIsLoading(true);
      await signIn("github", { callbackUrl: "/dashboard" });
    } catch (error) {
      setIsLoading(false);
      console.error("Failed to sign in with Github", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      disabled={isLoading}
      onClick={() => loginWithGithub()}
      className="w-full gap-2"
    >
      {isLoading && <LoadingSpinner />}
      <Image src={githubLogo} alt="Github logo" width="20" height="20" />
      Sign in with Github
    </Button>
  );
};

export default GithubSignInButton;
