"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NavBar from "./NavBar";

const Sidebar = () => {
  //I must use an AuthProvider for client components to useSession
  const { data: session } = useSession();

  return (
    <header
      className="w-60 bg-slate-800 text-slate-300 flex 
   flex-col gap-4 h-screen fixed top-0 left-0 py-8"
    >
      <div className="flex items-center mb-20">
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt={`${session?.user?.name}'s profile pic`}
            width="70"
            height="70"
            className="rounded-full ml-4"
          />
        )}
        <p className="font-semibold py-2 mx-auto">
          Hello, {session?.user?.name || session?.user?.username}!
        </p>
      </div>
      <NavBar />
    </header>
  );
};

export default Sidebar;
