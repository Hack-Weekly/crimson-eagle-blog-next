import type { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import RoundArrow from "./round-arrow"

type ThumbLinkProps = {
    title: string,
    url: string,
    dateString: string,
    imageSrc: string,
    tag: string,
    className?: string,
}
const ThumbLinkLarge: FC<ThumbLinkProps> = ({ title, url, dateString, imageSrc, tag, className }) => {
    
    const tagCap = tag[0]?.toUpperCase() as string + tag.slice(1).toLowerCase()

    return (
        <Link href={ url } className={ `relative rounded-[20px] overflow-hidden
            font-manrope font-semibold text-white focus-secondary ${ className || '' }` }>
            <Image
                className="w-full h-full object-cover"
                src={ `/images/${ imageSrc }` }
                width={ 1065 }
                height={ 689  }
                alt=""
            />
            <div className="absolute inset-8 flex flex-wrap justify-between items-start">
                <div className="w-full sm:w-auto mr-4 mb-4 flex flex-col justify-start items-start">
                    <div className="text-lg sm:text-xl mb-4 py-1 px-4 rounded-[15px] bg-accent">
                        { (new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(dateString))) }
                    </div>
                    <div className="text-lg sm:text-xl whitespace-nowrap py-1 px-4 border-2 rounded-[15px] border-white">
                        &bull; { tagCap }
                    </div>
                </div>
                <div className="w-full sm:w-3/4 lg:w-[490px] p-4 bg-accent rounded-[20px] font-extrabold
                    text-lg xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                    <span className="block text-lg sm:text-2xl">{ tagCap }</span>
                    { title }
                </div>
                <RoundArrow type="inverse" className="absolute top-0 bottom-auto sm:bottom-0 sm:top-auto right-0" />
            </div>
        </Link>
    )
}
export default ThumbLinkLarge