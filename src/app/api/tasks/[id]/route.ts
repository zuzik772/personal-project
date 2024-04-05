import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const body = await req.json();
  console.log("body", body);
  const { isImportant } = body;

  try {
    console.log("hello from api/tasks/id route", id, isImportant);
    const updatedTask = await prisma.task.updateMany({
      where: { id: Number(id) },
      data: {
        isImportant,
      },
    });
    if (updatedTask.count === 0) {
      return NextResponse.json(
        { message: "No task found to update" },
        { status: 404 }
      );
    }
    const task = await prisma.task.findUnique({ where: { id: Number(id) } });
    return NextResponse.json(task);
  } catch (error) {
    console.error("Error updating task", error);
    return NextResponse.json(
      { message: "Error updating task" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = params;
    const deletedTask = await prisma.task.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json(deletedTask);
  } catch (error) {
    console.error("Error deleting task", error);
    return NextResponse.json(
      { message: "Error deleting task" },
      { status: 500 }
    );
  }
}
