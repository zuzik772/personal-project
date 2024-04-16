import { PrismaClient } from "@prisma/client";
//to resolve the issue: warn(prisma-client) There are already 10 instances of Prisma Client actively running.
const prismaClientSingleton = () => {
  return new PrismaClient();
};
// PrismaClient is attached to the `global` object in development to prevent exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices
declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
