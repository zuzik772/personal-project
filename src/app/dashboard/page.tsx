"use client";
//I must use an AuthProvider for client components to useSession
import UserCard, { UserProps } from "../components/UserCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SignOutButton from "../components/SignOutButton";

const Dashboard = () => {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  return (
    <div>
      <h1>Dashboard</h1>

      <UserCard user={data?.user as UserProps} />
      <SignOutButton />
    </div>
  );
};

export default Dashboard;
