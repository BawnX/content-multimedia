export const serverError = () => {
  return new Response(JSON.stringify({
    message: "Ooops someting wrong",
  }),
  {
    status: 500,
  })
}

export const newResponse = (body: any, status: number) => {
  return new Response(JSON.stringify(body),
  {
    status: status,
    headers:{
      'Content-Type': 'application/json'
    }
  })
}

export const url = "http://localhost:4000"
