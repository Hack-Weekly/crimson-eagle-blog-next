import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import ThumbLink from "./components/thumb-link"
import ThumbLinkLarge from "./components/thumb-link-large"

export const metadata = {
  title: 'Home :: Crimson Blog',
  description: 'A blog application where you can write blogs.',
}

const data = [
  {
      id: 1,
      title: 'Get to your dream destinations now',
      url: 'get-to-your-dream-destinations-now',
      date: '2023-04-07',
      image: 'lake.jpg',
      tag: 'travel',
  },
  {
      id: 2,
      title: 'Deep dive into the trips of Meghalaya',
      url: 'deep-dive-into-the-trips-of-meghalaya',
      date: '2023-04-01',
      image: 'boat.jpg',
      tag: 'travel',
  },
  {
      id: 3,
      title: 'Let\'s talk about journeys of humans',
      url: 'lets-talk-about-journeys-of-humans',
      date: '2023-03-31',
      image: 'tracks.jpg',
      tag: 'travel',
  },
]

const Home: NextPage = () => (
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
            { data[0] && (
                <ThumbLinkLarge key={ data[0].id } className="lg:h-3/4"
                        title={ data[0].title } url={ data[0].url }
                        dateString={ data[0].date } imageSrc={ data[0].image } tag={ data[0].tag } />
            ) }
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-7 justify-stretch">
        { data.slice(1).map(article => (
            <ThumbLink key={ article.id } className="lg:h-1/2"
                title={ article.title } url={ article.url }
                dateString={ article.date } imageSrc={ article.image } tag={ article.tag } />
        )) }
        </div>
    </main>
)

export default Home
