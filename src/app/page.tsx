import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { options } from "./api/auth/[...nextauth]/options";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main className={styles.main}>
      <h1>Hi from Zuzi</h1>
      <Link href="/dashboard">Go to dashboard</Link>
      {session && <p>I can see you are logged in</p>}
    </main>
  );
}
