import Link from "next/link"
import { prisma } from "~/server/db"

const getPosts = () => {
    return prisma.posts.findMany({
        where: {
            authorId: '1',
        },
        orderBy: {
            createdAt: 'desc',
        },
        take: 3,
    })
}

// @ts-expect-error Async Server Component
const Posts: React.FC = async () => {

    const posts = await getPosts()

    return (
        <div className="w-full border border-secondary shadow p-8 flex flex-col">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium">Your latest posts</h2>
            <ul className="grow flex flex-col justify-evenly">
                { posts.map(post => (
                    <li key={ post.id }>
                        <Link className="py-2 underline hover:text-secondary"
                            href={ `/admin/posts/${ post.id }` }>
                            { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(post.createdAt) } :: { post.title }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts