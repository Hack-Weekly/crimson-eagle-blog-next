import type { NextPage } from "next"
import PostForm from "../components/post-form"

const Post: NextPage = () => (
    <main className="grow p-6 font-signika">
        <h1 className="mr-2 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Create new Post
        </h1>
        <section className="py-6">
            {/* // @ts-expect-error Async Server Component */}
            <PostForm />
        </section>
    </main>
)

export default Post