"use client"

import { useRouter } from "next/navigation"
import { useModal } from "./use-modal"
import type { DeletePostBody } from "~/helpers/post-types"

const DeleteForm = ({ id, title }: { id: string, title: string }) => {

    const router = useRouter()
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        fetch(`/api/posts/${ id }`, {
            method: 'DELETE',
        }).then(res => {
            if (res.status == 400) {
                // TODO handle results of server side validation
                console.log(res)
            } else {
                void router.refresh()
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="py-6 px-8 rounded-lg bg-white text-center">
            <h2 className="text-xl mb-2">Are you sure you want to delete this post?</h2>
            <p className="italic">{ title }</p>
            <form onSubmit={ handleSubmit }>
                <button className="mt-4 py-2 px-6 rounded bg-red-700 text-white" type="submit">Delete</button>
            </form>
        </div>
    )
}

const DeleteModal = ({ id, title }: { id: string, title: string }) => {

    const { showModal, setModalOpen } = useModal()

    return (
        <>
        <button className="rounded p-1 bg-red-700 text-white"
            onClick={ () => setModalOpen(true) }>
            <svg className="w-6 h-6 stroke-current fill-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={ 2 }>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
        { showModal({ children: <DeleteForm id={ id } title={ title } /> })}
        </>
    )
}

export default DeleteModal