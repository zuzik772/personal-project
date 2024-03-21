import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Link from "next/link";

export default async function Home() {
  //getServerSession is faster than useSession
  const session = await getServerSession(options);
  console.log("session", session);
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h1 className="text-3xl mb-4 text-center">Hi from Zuzi</h1>
      <nav className="flex flex-col gap-4 p-4 bg-white rounded shadow w-fit">
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Go to dashboard
        </Link>
        <Link href="/api/auth/signin" className="text-blue-500 hover:underline">
          Go to sign in
        </Link>
        <Link href="/api/signup" className="text-blue-500 hover:underline">
          Go to sign up
        </Link>
      </nav>
      {session && (
        <p className="mt-4 text-center text-green-500 font-bold">
          I can see you managed to sign in {session.user.username}
          {session.user.username === "Zuzana" && (
            <p> good luck with landing the awesome job with Shape Games!</p>
          )}
        </p>
      )}
    </div>
  );
}
