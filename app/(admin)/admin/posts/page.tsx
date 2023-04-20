import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { prisma } from "~/server/db"
import DeleteForm from "./components/delete-form"

export const metadata = {
  title: 'Posts :: Crimson Blog',
  description: 'List of your blog posts.',
}

const getPosts = () => {
    return prisma.posts.findMany({
        where: {
            authorId: '1',
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
}

// @ts-expect-error Async Server Component
const Posts: NextPage = async () => {

    const posts = await getPosts()

    return (
        <main className="grow p-6 font-signika">
            <h1 className="mr-2 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">Posts</h1>
            <section className="py-6">
                <table className="w-full text-center admin-table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Published
                            </th>
                            <th>
                                Created
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                    { posts.map(post => (
                        <tr key={ post.id }>
                            <td>
                                <Image
                                    className="rounded object-cover"
                                    src={ post.image ? post.image : '' }
                                    width={ 100 }
                                    height={ 100 }
                                    alt=""
                                />
                            </td>
                            <td>
                                { post.title }
                            </td>
                            <td>
                                { post.published ? 
                                    <span className="text-green-700">✓</span>
                                    :
                                    <span className="text-red-700">✗</span>
                                }
                            </td>
                            <td>
                                { new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(post.createdAt) }
                            </td>
                            <td>
                                <div className="flex justify-evenly items-center">
                                    <Link href={ `/admin/posts/${ post.id }` }>Edit</Link>
                                    <DeleteForm id={ post.id } title={ post.title } />
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default Posts