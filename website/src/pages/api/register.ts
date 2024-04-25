import type { APIRoute } from "astro"
import { loginFetch } from "./login"

export const createUser = async(name: string, role: string, password: string, email: string) => {
  return await fetch('http://localhost:4000/user', {
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user:{
        email,
        password,
        role,
        name
    }})
  })
}

export const POST: APIRoute = async (ctx) => {
  try{
    const body = await ctx.request.json()
    const resUser = await createUser(body.name, body.role, body.password, body.email)
    // console.log(resUser);

    if(resUser.status!== 201){
      return new Response(JSON.stringify({
        message:"Cannot create user"
      }),{
        status:401
      })
    }

     return loginFetch(body.email, body.password)
  }
  catch (err){
    return new Response(JSON.stringify({
      message: "Ooops someting wrong",
    }),
    {
      status: 500,
    })
  }
}
