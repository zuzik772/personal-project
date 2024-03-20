"use client";

import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/api/auth/signout")}>Sign out</button>
    </>
  );
};

export default SignOutButton;
