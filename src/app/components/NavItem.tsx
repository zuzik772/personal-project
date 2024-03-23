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
    <li className="hover:bg-slate-900 transition-colors w-full cursor-pointer">
      <Link
        href={path}
        className={`${
          path === currectPath
            ? "text-slate-100 bg-slate-900"
            : "text-slate-400"
        } flex gap-2 items-center p-3 pl-6 transition-colors`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
