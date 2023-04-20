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
const ThumbLink: FC<ThumbLinkProps> = ({ title, url, dateString, imageSrc, tag, className }) => {

    
    const tagCap = tag[0]?.toUpperCase() as string + tag.slice(1).toLowerCase()

    return (
        <Link href={ url } className={ `relative rounded-[20px] overflow-hidden
            font-manrope font-semibold text-white focus-secondary ${ className || '' }` }>
            <Image
                className="w-full h-full object-cover"
                src={ `/images/${ imageSrc }` }
                width={ 690 }
                height={ 440 }
                alt=""
            />
            <div className="absolute top-4 left-8 text-lg sm:text-xl">
                { (new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(dateString))) }
            </div>
            <div className="absolute left-8 right-8 sm:right-32 lg:right-8 2xl:right-36 bottom-8
                flex flex-wrap 2xl:flex-nowrap justify-between items-center">
                <div className="mr-12 text-lg sm:text-xl whitespace-nowrap">&bull; { tagCap }</div>
                <div className="font-extrabold
                    text-lg xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                    { title }
                </div>
            </div>
            <RoundArrow className="absolute right-8 top-8 bottom-auto sm:bottom-8 sm:top-auto
                lg:top-8 lg:bottom-auto 2xl:bottom-8 2xl:top-auto" />
        </Link>
    )
}
export default ThumbLink