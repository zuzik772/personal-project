import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { userSchema } from "@/app/utils/validationSchemas";

export async function POST(req: Request) {
  //Using try catch + parse
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });
    const existingUserByUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "Username already exists" },
        { status: 409 }
      );
    }
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);
    const newUSer = await prisma.user.create({
      data: {
        username,
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
