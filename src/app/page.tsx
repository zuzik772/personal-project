import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import SignOutButton from "./components/buttons/SignOutButton";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  //getServerSession is faster than useSession
  const session = await getServerSession(options);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="lg:text-3xl text-xl px-2 mb-4 text-center">
        Hello [Rasmus, Magnus, Eugenio], please{" "}
        {!session ? "sign in to enjoy" : "enjoy"} the show from Zuzana
      </h1>
      <Link href="/dashboard" className={buttonVariants()}>
        Enter Personal Developemnt Project
      </Link>
      <div>
        {session ? (
          <SignOutButton />
        ) : (
          <Link
            href="signin"
            className={`absolute top-6 right-6 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
