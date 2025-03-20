export { default } from "next-auth/middleware";

//declare authenticated pages
export const config = { matcher: ["/admin/dashboard"] };
