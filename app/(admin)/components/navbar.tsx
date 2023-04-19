import Link from "next/link"

const Navbar = () => (
    <nav className="w-full flex justify-between items-center px-6 py-2">
        <Link className="px-6 py-2 flex items-center text-xl hover:text-secondary focus-secondary"
            href="/admin">
                <svg className="w-6 h-6 fill-current mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <defs>
                        <rect width={ 6 } height={ 6 } id="square" />
                    </defs>
                    <use xlinkHref="#square" x={ 0 } y={ 0 } />
                    <use xlinkHref="#square" x={ 8 } y={ 0 } />
                    <use xlinkHref="#square" x={ 16 } y={ 0 } />
                    <use xlinkHref="#square" x={ 0 } y={ 8 } />
                    <use xlinkHref="#square" x={ 8 } y={ 8 } />
                    <use xlinkHref="#square" x={ 16 } y={ 8 } />
                    <use xlinkHref="#square" x={ 0 } y={ 16 } />
                    <use xlinkHref="#square" x={ 8 } y={ 16 } />
                    <use xlinkHref="#square" x={ 16 } y={ 16 } />
                </svg>
                Dashboard
            </Link>
        <div className="flex gap-x-4">
            <Link className="px-6 py-2 underline underline-offset-4
                hover:text-secondary hover:underline-offset-8 focus-secondary"
                href="/admin/posts">Posts</Link>
            <Link className="px-6 py-2 underline underline-offset-4
                hover:text-secondary hover:underline-offset-8 focus-secondary"
                href="/admin/posts/create">Add new Post</Link>
            <Link className="px-6 py-2 underline underline-offset-4
                hover:text-secondary hover:underline-offset-8 focus-secondary"
                href="/admin/logout">Logout</Link>
        </div>
    </nav>
)

export default Navbar