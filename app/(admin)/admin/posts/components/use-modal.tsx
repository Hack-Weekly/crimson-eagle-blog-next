import { type ReactNode, useEffect, useState } from "react"
import Modal from "./modal"

export const useModal = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [windowSize, setWindowSize] = useState([0, 0])

    useEffect(() => {
        document.body.style.overflow = modalOpen ? 'hidden' : 'unset'
    }, [modalOpen])

    useEffect(() => {
        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', handleResize)
        
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key == 'Escape') {
                setModalOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const showModal = ({ children }: { children: ReactNode }) => {
        return modalOpen &&
            <Modal onClose={ () => { setModalOpen(false) }}>
                { children }
            </Modal>
    }

    return {
        modalOpen,
        setModalOpen,
        showModal,
    }
}