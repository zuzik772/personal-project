import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="lg:text-3xl text-xl px-2 mb-4 text-center">
        Hello [Rasmus, Magnus, Eugenio], please enjoy the show from Zuzana
      </h1>
      <Link href="/dashboard" className={buttonVariants()}>
        Enter Personal Developemnt Project
      </Link>
    </div>
  );
}
