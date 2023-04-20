import Image from "next/image"

const SearchForm = () => (
    <form className="w-full grow-0 md:grow lg:grow-0 md:max-w-sm md:mx-8 my-4 relative font-manrope">
        <input
            className="w-full pl-12 pr-4 py-3 rounded-[20px] bg-secondary-200
                placeholder:text-secondary placeholder:font-semibold
                focus-secondary"
            type="text"
            name="search"
            id="search"
            required={ true }
            aria-required="true"
            placeholder="Search Blog Posts"
        />
        <button type="submit" title="Search blog posts"
            className="absolute top-1/2 -translate-y-1/2 left-4 p-1 rounded-full
                focus-secondary ring-offset-secondary">
            <Image                
                src="/search-icon.svg"
                width={ 18 }
                height={ 18 }
                alt=""
            />
        </button>        
    </form>
)

export default SearchForm