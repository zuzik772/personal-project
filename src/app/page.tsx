import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import SignInButton from "./components/buttons/SignInButton";
import SignOutButton from "./components/buttons/SignOutButton";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  //getServerSession is faster than useSession
  const session = await getServerSession(options);
  console.log(session);
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4 text-center">
        Hello [Rasmus, Magnus, Eugenio], please{" "}
        {!session ? "sign in " : "enjoy"} the show from Zuzana
      </h1>
      <Link href="/dashboard" className={buttonVariants()}>
        Enter Personal Developemnt Project
      </Link>
      <div className="absolute top-6 right-6">
        {session ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  );
}
