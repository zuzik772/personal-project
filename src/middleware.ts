//Without defined matcher, this one line applies next-auth to the entire project
export { default } from "next-auth/middleware";

//Applies next-auth only to the matching routes
export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/completed",
    "/dashboard/important",
    "/dashboard/inprogress",
    "/dashboard/new",
  ],
};
