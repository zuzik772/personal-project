"use client";
import { useSession } from "next-auth/react";
//I must use an AuthProvider for client components to useSession
import Image from "next/image";

const UserCard = () => {
  const { data: session } = useSession();

  return (
    <section>
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          alt={`${session?.user?.name}'s profile pic`}
          width="200"
          height="200"
        />
      )}
      <p>Hello, {session?.user?.name || session?.user?.username}!</p>
    </section>
  );
};

export default UserCard;
