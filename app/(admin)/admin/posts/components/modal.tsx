import type { MouseEvent, ReactNode } from "react"

type ModalProps = {
    onClose: (event?: MouseEvent) => void,
    children: ReactNode
}
const Modal = ({ onClose, children }: ModalProps) => (
    <>
        <div className="fixed inset-0 bg-gray-800 opacity-75 z-10"
            role="presentation">
        </div>
        <div className="fixed inset-0 z-10"
            role="dialog" aria-label="Image enlargement">
            <div className="fixed inset-1 md:inset-3 lg:inset-5 flex items-center justify-center"
                aria-modal="true"
                role="dialog">
                { children }
                <button className="absolute top-0 right-0 text-white"
                    onClick={ onClose }>
                    <svg className="fill-current h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <defs>
                            <filter id="shadow">
                                <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2"/>
                            </filter>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"
                            filter="url(#shadow)" />
                        <title>Close Modal</title>
                    </svg>
                </button>
            </div>
        </div>
    </>
)

export default Modal