import type { APIRoute } from "astro"

export const POST: APIRoute = async (ctx) => {
  try{
    const res = await fetch('localhost:4000/authentication/login', {
      method: "POST",
      body: JSON.stringify({
        email: "",
        password: ""
      })
    })

    if(res.status!== 200){
      return new Response(JSON.stringify({
        message: "Login failed",
      }),
      {
        status: 401,
      })
    }

    const data = await res.json()

    ctx.cookies.set("Authorization", data.access_token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 2, // 2 hours in seconds
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
