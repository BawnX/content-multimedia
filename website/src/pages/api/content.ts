import type { APIRoute } from "astro"
import { url } from "inspector"
import { newResponse, serverError } from "website/src/utils/api"

export const GET: APIRoute = async (ctx) => {
  try{
    const tag = ctx.params.tag
    const res = await fetch(url + "/content/by-tag?" + tag, { method:"GET" })

    const data = await res.json()
    return newResponse(data.data, 201)
  }
  catch (err){
    return serverError()
  }
}
