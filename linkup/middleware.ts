import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

const isProtectedRoute = createRouteMatcher([
//   "/",
  "/upcoming",
  "/recordings",
  "/previous",
  "/personal-room",
  "/meeting(.*)",
]);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    "/(api|trpc)(.*)",
  ],
};
