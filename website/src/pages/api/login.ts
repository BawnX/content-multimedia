import type { APIRoute } from "astro"
import { newResponse, serverError, url } from "website/src/utils/api"

export const loginFetch = async (email: string, password: string) => await fetch('http://localhost:4321/api/login', {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email,
    password
  })
})

export const POST: APIRoute = async (ctx) => {
  try{
    const body = await ctx.request.json()
    const loginUrl = url+'/authentication/login'

    const res = await fetch(loginUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: body.email,
        password: body.password
      })
    })

    if(res.status!== 201){
      return newResponse({message:"Incorrect credentials"}, 401)
    }

    const data = await res.json()

    ctx.cookies.set("Authorization", data.access_token, {
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 12,
    });
    ctx.cookies.set("user", JSON.stringify({ id: data.id, role:data.role }), {
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 12,
    });
    return newResponse({message: "You're logged in!"}, 201)
  }
  catch (err){
    console.log(err)
    return serverError()
  }
}
