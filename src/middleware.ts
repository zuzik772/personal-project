//Without defined matcher, this one line applies next-auth to the entire project
export { default } from "next-auth/middleware";

//Applies next-auth only to the matching routes
export const config = {
  matcher: [
    "/dashboard/:path*", // Matches /dashboard and /dashboard/*
  ],
};

//The advantage of employing Middleware for this task is that the protected routes will not even start rendering until the Middleware verifies the authentication, enhancing both the security and performance of your application.
