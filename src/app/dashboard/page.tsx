"use client";
//I must use an AuthProvider for client components to useSession
import UserCard, { UserProps } from "../components/UserCard";
import styles from "../page.module.css";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import GoBackButton from "../components/SignOutButton";

const Dashboard = () => {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  console.log("data", data);

  return (
    <div className={styles.main}>
      <h1>Dashboard</h1>

      <UserCard user={data?.user as UserProps} />
      <GoBackButton />
    </div>
  );
};

export default Dashboard;
