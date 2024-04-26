import { type APIContext, type MiddlewareNext } from "astro"
import type { MiddlewareHandler } from "astro";

const ValidateJWT = async (jwt: string) => {
  return await fetch("http://localhost:4000/authentication/validate", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '+ jwt,
    },
  })
};

const publicPaths = [
  "login",
  "register",
  "ico",
  "/"
]

const middleware: MiddlewareHandler = async ({ redirect, request, cookies, locals }: APIContext, next: MiddlewareNext) => {
    const auth = cookies.get("Authorization");
    const theme = cookies.get('theme')
    const url = request.url

    if (!theme) {
      locals.theme = "light"
      cookies.set('theme',  "light")
    }

    if (theme) {
      locals.theme = theme.value
    }

    if(publicPaths.some((path)=> url.includes(path))){
      return next()
    }

    if(!auth){
      return redirect("/login")
    }

    const validateRes = await ValidateJWT(auth.value)

    if (validateRes.status !== 200) {
        return redirect("/login")
    }

    return next();
};

export const onRequest = middleware;
