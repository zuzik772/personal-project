import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);
    const newUSer = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUSer;
    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
