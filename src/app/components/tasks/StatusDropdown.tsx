"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Status } from "@prisma/client";
import { MdOutlineTaskAlt as CompletedIcon } from "react-icons/md";
import { GrInProgress as InProgressIcon } from "react-icons/gr";
import { BsListTask as NewTasksIcon } from "react-icons/bs";
import { MdKeyboardArrowDown as DropdownIcon } from "react-icons/md";

type Props = {
  id: number;
  status: Status;
};
const StatusDropdown = ({ id, status }: Props) => {
  const { updateTask } = useGlobalContext();
  const handleStatusChange = (newStatus: Status) => {
    updateTask(id, { status: newStatus });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          // className="bg-primary300 text-white hover:bg-primary400 border-2 border-solid border-white "
        >
          {
            status === "NEW" ? (
              "New"
            ) : status === "IN_PROGRESS" ? (
              <InProgressIcon className="text-lg " />
            ) : (
              // "In progress"
              <CompletedIcon className="text-xl text-primary900" />
            )
            // "Completed"
          }
          {/* <DropdownIcon className="icon m-0" /> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Mark as:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={status === Status.NEW}
          onCheckedChange={() => handleStatusChange(Status.NEW)}
        >
          New
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={status === Status.IN_PROGRESS}
          onCheckedChange={() => handleStatusChange(Status.IN_PROGRESS)}
        >
          In progress
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={status === Status.COMPLETED}
          onCheckedChange={() => handleStatusChange(Status.COMPLETED)}
        >
          Completed
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropdown;
