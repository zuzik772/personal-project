"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  path: string;
  children: React.ReactNode;
};
const NavItem = ({ children, path }: NavItemProps) => {
  const currectPath = usePathname();
  return (
    <li className="hover:bg-primary300 transition-colors w-full cursor-pointer">
      <Link
        href={path}
        className={`${
          path === currectPath ? "text-white bg-primary300" : "text-primary300"
        } hover:text-primary900 flex gap-2 items-center p-3 pl-10 transition duration-300 ease-in-out`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
