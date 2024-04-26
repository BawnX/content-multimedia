import type { APIRoute } from "astro"
import { newResponse, serverError } from "website/src/utils/api";

export const POST: APIRoute = async (ctx) => {
  try{
    ctx.cookies.delete("Authorization", {
      httpOnly: true,
      path: "/",
    });

    ctx.cookies.delete("user", {
      httpOnly: true,
      path: "/",
    });


    return newResponse({message: "You're log out!"}, 201)
  }
  catch (err){
    return serverError()
  }
}
