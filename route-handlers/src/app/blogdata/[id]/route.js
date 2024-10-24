import { redirect } from "next/navigation"
import { blogs } from "../data"

export async function GET( _request, { params }) {
    const blog = blogs.find((item) => ( item.id === parseInt(params.id) ))

    if (blog) {
        return Response.json(blog)
    }else{
        redirect("/blogdata")
    }

    // return new Response("Invalid Blog Request", {status: 404})
}


export async function PATCH( request, { params }) {
    const blog = blogs.find((item) => ( item.id === parseInt(params.id) ));
    const body = await request.json();
    const { title } = body;
    if (blog) {
        blog.title = title
        return Response.json(blog);
    }
    
    return new Response("Invalid blog update", {status: 404})
}

export async function DELETE( _request, { params }) {
    const id = parseInt(params.id) - 1;
    blogs.splice(id, 1)

    return Response.json(blogs, { status: 200});
}