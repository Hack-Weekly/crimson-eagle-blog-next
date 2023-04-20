import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import { prisma } from "~/server/db"
import ThumbLink from "./components/thumb-link"
import ThumbLinkLarge from "./components/thumb-link-large"
import { slugify } from "~/helpers/slugify"

export const metadata = {
  title: 'Home :: Crimson Blog',
  description: 'A blog application where you can write blogs.',
}

const getPosts = () => {
    return prisma.posts.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        take: 3,
    })
}

// @ts-expect-error Async Server Component
const Home: NextPage = async () => {

    const posts = await getPosts()

    return (
        <main className="grow mx-8 lg:mx-10 xl:mx-12 mt-4 mb-6
            flex flex-col gap-7 lg:flex-row lg:gap-[72px]">
            <div className="w-full lg:w-3/5 flex flex-col gap-7 lg:gap-0 justify-stretch">
                <div className="w-full h-1/4 flex items-center">
                    <div className="flex flex-wrap items-baseline">
                        <h1 className="mr-2 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold font-signika">Best of the Week</h1>
                        <Link href="/posts" className="flex items-baseline text-xl xl:text-2xl focus-secondary">
                            See all posts
                            <Image
                                className="ml-2"
                                src="/arrow-left.svg"
                                width={ 24 }
                                height={ 12 }
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                { posts[0] && (
                    <ThumbLinkLarge key={ posts[0].id } className="lg:h-3/4"
                            title={ posts[0].title } url={ '/posts/' + slugify(posts[0].title) }
                            date={ posts[0].createdAt } tag={ `travel` }
                            imageSrc={ posts[0].image ? posts[0].image : '' } />
                ) }
            </div>
            <div className="w-full lg:w-2/5 flex flex-col gap-7 justify-stretch">
            { posts.slice(1).map(article => (
                <ThumbLink key={ article.id } className="lg:h-1/2"
                    title={ article.title } url={ '/posts/' + slugify(article.title) }
                    date={ article.createdAt } tag={ `travel` }
                    imageSrc={ article.image ? article.image : '' } />
            )) }
            </div>
        </main>
    )
}

export default Home
