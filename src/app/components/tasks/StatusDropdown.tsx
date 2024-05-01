"use client";

import * as React from "react";
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
import { cn } from "@/lib/utils";
import { Task } from "./TaskItem";

const StatusDropdown = (task: Task) => {
  const { updateTask } = useGlobalContext();
  const { id, status } = task;
  const handleStatusChange = (newStatus: Status) => {
    updateTask(id, { ...task, status: newStatus });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("px-2")}>
          {status === "NEW" ? (
            "New"
          ) : status === "IN_PROGRESS" ? (
            <InProgressIcon className="text-lg text-primary900" />
          ) : (
            <CompletedIcon className="text-xl text-primary900" />
          )}
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
