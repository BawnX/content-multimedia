import type { APIRoute } from "astro"
import { loginFetch } from "./login"
import { newResponse, serverError, url } from "website/src/utils/api"

export const createUser = async(name: string, role: string, password: string, email: string) => {
  return await fetch(url + '/user', {
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

    if(resUser.status!== 201){
      return newResponse({message:"Cannot create user"}, 401)
    }

     return loginFetch(body.email, body.password)
  }
  catch (err){
    return serverError()
  }
}
