import type { APIRoute } from "astro"

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
    const res = await fetch('http://localhost:4000/authentication/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: body.email,
        password: body.password
      })
    })

    if(res.status!== 201){
      return new Response(JSON.stringify({
        message: "Incorrect credentials",
      }),
      {
        status: 401,
      })
    }

    const data = await res.json()

    ctx.cookies.set("Authorization", data.access_token, {
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 12,
    });

    return new Response(
      JSON.stringify({
        message: "You're logged in!",
      }),
      {
        status: 200,
      }
    );
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
