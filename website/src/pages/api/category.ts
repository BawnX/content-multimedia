import type { APIRoute } from "astro"
import { newResponse, serverError, url } from "website/src/utils/api"

export const GET: APIRoute = async (ctx) => {
  try{
    const res = await fetch(url + "/category", { method:"GET" })

    const data = await res.json()
    return newResponse(data.data, 201)
  }
  catch (err){
    return serverError()
  }
}

export const POST: APIRoute = async (ctx) => {
  try{
    const body = await ctx.request.json()
    ctx.cookies.get("Authorization")

    const res = await fetch(url + "/category", {
      method:"POST",
      body: JSON.stringify({
        category: {
          name: body.name,
          type: body.type
        }
      })
    })
    const data = await res.json()

    if(res.status !== 201) {
      return newResponse({message: data.message}, 200)
    }


    return newResponse({message: "Category created", ...data}, 201)
  }
  catch (err){
    return serverError()
  }
}

