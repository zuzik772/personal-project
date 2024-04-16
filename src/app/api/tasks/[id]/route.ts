import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  try {
    const task = await prisma.task.findUnique({ where: { id: Number(id) } });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching task" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  console.log("params", params);
  const { id } = params;
  const body = await req.json();
  console.log("body", body);
  const { task } = body;
  console.log("task", task);
  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: task,
    });

    return NextResponse.json(updatedTask);
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
