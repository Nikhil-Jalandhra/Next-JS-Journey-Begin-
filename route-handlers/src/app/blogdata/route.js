import { blogs } from "./data";

export async function GET( request) {
  const { searchParams } = new URL(request.url);
  // const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query ? blogs.filter((item) => (item.title.includes(query))) : blogs;
    return Response.json(filteredComments);
}

export async function POST( request ) {
   const data = await request.json();
   if (!data) {
    return new Response("Invalid Blog Request", {status: 404})
   }
   const newData  = {
     id: blogs.length + 1,
     title: data.title,
     author: data.author,
     date: data.date
   }
   blogs.push(newData)
   return new Response(JSON.stringify(newData), {status: 201})
}