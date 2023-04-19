import type { NextPage } from "next"
import { prisma } from "~/server/db"
import PostForm from "../components/post-form"

const getPost = (id: string) => {
    return prisma.posts.findUnique({
        where: {
            id,
        },
    })
}

type PostProps = {
    params: {
        id: string
    }
}
// @ts-expect-error Async Server Component
const Post: NextPage = async ({ params }: PostProps) => {

    const post = await getPost(params.id)

    return (
        <main className="grow p-6 font-signika">
            <h1 className="mr-2 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                { post && post.title }
            </h1>
            <section className="py-6">
                { post ? 
                    // // @ts-expect-error Async Server Component
                    <PostForm post={{ ...post, authorId: post.authorId ? post.authorId : '' }} />
                :
                    <p className="text-red-700">Post was not found.</p>
                }
            </section>
        </main>
    )
}

export default Post