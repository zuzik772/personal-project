import { FaHome as AlltasksIcon } from "react-icons/fa";
import { MdOutlineTaskAlt as CompletedIcon } from "react-icons/md";
import { GrInProgress as InProgressIcon } from "react-icons/gr";
import { MdNotificationImportant as ImportantIcon } from "react-icons/md";
import { BsListTask as NewTasksIcon } from "react-icons/bs";
const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: AlltasksIcon,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Important!",
    icon: ImportantIcon,
    link: "/dashboard/important",
  },
  {
    id: 3,
    title: "New tasks",
    icon: NewTasksIcon,
    link: "/dashboard/new",
  },
  {
    id: 4,
    title: "In progress",
    icon: InProgressIcon,
    link: "/dashboard/inprogress",
  },
  {
    id: 5,
    title: "Completed",
    icon: CompletedIcon,
    link: "/dashboard/completed",
  },
];

export default menu;
