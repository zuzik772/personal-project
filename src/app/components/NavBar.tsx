import { createElement } from "react";
import menu from "../utils/menu";
import SignOutButton from "./buttons/SignOutButton";
import NavItem from "./NavItem";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};
const NavBar = ({ setIsOpen }: Props) => {
  return (
    <nav className="flex flex-col items-center justify-between">
      <ul className="flex flex-col w-full">
        {menu.map((item) => {
          const link = item.link;
          return (
            <NavItem key={item.id} path={link} onClick={() => setIsOpen(false)}>
              {createElement(item.icon)}
              {item.title}
            </NavItem>
          );
        })}
      </ul>
      <SignOutButton />
    </nav>
  );
};

export default NavBar;
