import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import SignOutButton from "./components/buttons/SignOutButton";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  //getServerSession is faster than useSession
  const session = await getServerSession(options);
  return (
    <div className="p-6 min-h-screen w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4 text-center">
        Hello [Rasmus, Magnus, Eugenio], please{" "}
        {!session ? "sign in " : "enjoy"} the show from Zuzana
      </h1>
      <Link href="/dashboard" className={buttonVariants()}>
        Enter Personal Developemnt Project
      </Link>
      <div className="absolute top-6 right-6">
        {session ? (
          <SignOutButton />
        ) : (
          <Link href="signin" className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
