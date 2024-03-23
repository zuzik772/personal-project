import { createElement } from "react";
import menu from "../utils/menu";
import SignOutButton from "./buttons/SignOutButton";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="flex flex-col items-center justify-between w-full h-full">
      <ul className="flex flex-col w-full">
        {menu.map((item) => {
          const link = item.link;
          return (
            <NavItem key={item.id} path={link}>
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
