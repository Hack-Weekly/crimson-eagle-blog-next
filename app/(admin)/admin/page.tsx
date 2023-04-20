import type { NextPage } from "next"
import Posts from "./components/posts"
import Stats from "./components/statistics"

export const metadata = {
  title: 'Dashboard :: Crimson Blog',
  description: 'Your admin interface to the Crimson Blog.',
}

const Dashboard: NextPage = () => (
    <main className="grow p-6 font-signika">
        <h1 className="mr-2 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">Welcome to your Dashboard</h1>
        <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 py-6">            
            <Posts />
            <Stats />
        </section>
    </main>
)

export default Dashboard