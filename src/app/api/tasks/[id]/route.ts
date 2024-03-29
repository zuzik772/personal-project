import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

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
