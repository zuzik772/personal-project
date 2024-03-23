import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const SignInButton = () => {
  return (
    <Link href="signin" className={buttonVariants()}>
      Sign in
    </Link>
  );
};

export default SignInButton;
