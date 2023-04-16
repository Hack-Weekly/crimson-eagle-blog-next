import type { FC } from "react"

type RoundArrowProps = {
    type?: 'normal' | 'inverse',
    className?: string,
}
const RoundArrow: FC<RoundArrowProps> = ({ type = 'normal', className }) => (
    <div className={ `w-16 h-16 shrink-0 flex justify-center items-center rounded-full 
        ${ type == 'normal' ? 'bg-white' : 'bg-accent'} ${ className || '' }` }>
        <svg className={ `w-4 h-4 fill-none ${ type == 'normal' ? 'stroke-accent' : 'stroke-white'}` }
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(-2)"
            strokeLinecap="round" strokeLinejoin="round">
                <line x1="0" y1="18" x2="18" y2="0" strokeWidth={ 3 } />
                <line x1="6" y1="0" x2="18" y2="0" strokeWidth={ 4 } />
                <line x1="18" y1="12" x2="18" y2="0" strokeWidth={ 4 } />
            </g>
        </svg>
    </div>
)

export default RoundArrow