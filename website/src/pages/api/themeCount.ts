import type { APIRoute } from "astro"
import { newResponse, serverError, url } from "website/src/utils/api"

export const GET: APIRoute = async (ctx) => {
  try{
    const countPromise = fetch(url + "/theme/count", { method:"GET" })
    const categoryPromise = fetch(url + "/category", { method:"GET" })
    const [countRes, categoryRes] = await Promise.all([countPromise, categoryPromise])

    const dataCount = await countRes.json()
    const dataCategory = await categoryRes.json()

    const count = dataCount.data.map(({ category, ...theme}) => {
      if(dataCategory.data.length === category.length){
        return {...theme, category}
      }

      const counts = dataCategory.data.map(el => {
        const find = category.find(f => f.id === el.id)
        if(find){
          return find
        }

        return { id: el.id, name: el.name, count: 0}
      })

      return {...theme, category: counts }
    })

    return newResponse(count, 201)
  }
  catch (err){
    return serverError()
  }
}
