import type { NextAuthOptions, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials): Promise<User | null> {
        const user = { id: "1", username: "zuz", password: "pass123" };
        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else throw new Error("Invalid credentials");
      },
    }),
  ],
};
