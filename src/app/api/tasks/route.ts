import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { TaskSchema } from "@/app/utils/validationSchemas";

export async function POST(req: NextRequest) {
  //using if else + safeParse
  //safeParse() will return an object containing either a success or error field. This will help handle validation more gracefully without having put this logic inside the try/catch block.
  const body = await req.json();
  const validation = TaskSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newTask = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      isImportant: body.isImportant,
    },
  });

  return NextResponse.json(newTask, { status: 201 });
}

export async function GET(req: NextRequest) {
  try {
    const searchQuery = req.nextUrl.searchParams.get("query") || "";
    const tasks = await prisma.task.findMany({
      where: {
        title: {
          contains: searchQuery,
          mode: "insensitive",
        },
      },
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks", error);
    return NextResponse.json(
      { message: "Error fetching tasks" },
      { status: 500 }
    );
  }
}
