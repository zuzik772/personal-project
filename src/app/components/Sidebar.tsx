"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NavBar from "./NavBar";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { IoCloseSharp as CloseMenuIcon } from "react-icons/io5";

const Sidebar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="lg:hidden p-2 absolute top-0 left-2"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <MenuIcon className="icon" />
      </button>
      <header
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block w-60 flex bg-primary900 flex-col  h-screen fixed top-0 left-0 ${
          session?.user?.image ? "py-5" : "py-8"
        } z-10`}
      >
        <button
          className="lg:hidden p-2 absolute top-0 left0"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <CloseMenuIcon className="icon text-white" />
        </button>
        <div className="flex items-center mb-8">
          {session?.user?.image && (
            <Image
              src={session?.user?.image}
              alt={`${session?.user?.name}'s profile pic`}
              width="70"
              height="70"
              className="rounded-full ml-4"
            />
          )}
          <p className="font-semibold py-2 mx-auto text-gray300">
            Hello, {session?.user?.name || session?.user?.username}!
          </p>
        </div>
        <NavBar setIsOpen={setIsOpen} />
      </header>
    </div>
  );
};

export default Sidebar;
