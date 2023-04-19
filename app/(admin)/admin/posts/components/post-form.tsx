"use client"

//import { getSession } from "next-auth/react"
import Image from "next/image"
import type { PostType } from "~/helpers/post-types"
import { usePostForm } from "./use-post-form"

const PostForm = ({ post }: { post?: PostType}) => {

    //const session = await getSession()
    //id: session ? session.user.id : ''
    const { postData, setData, handleSubmit } = usePostForm({ post, id: '' })

    /* if (!session || !session.user) {
        return <p className="text-red-700">You need to be logged in to access this part of the site.</p>
    } */

    return (
        <form className="w-full"
            action={ `/api/posts/${ post ? post.id : '' }` }
            method="post"
            onSubmit={ handleSubmit }
        >
            <div className="my-6 flex flex-wrap lg:flex-nowrap items-center">
                <label className="w-full lg:w-2/12">Created at</label>
                <div className="w-full lg:w-10/12 mt-2 lg:mt-0 px-6 py-3">
                    { new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
                        .format(new Date()) }
                </div>
            </div>
            { postData.image && (
                <div className="my-6 flex flex-wrap lg:flex-nowrap items-center">
                    <label className="w-full lg:w-2/12">Current image</label>
                    <div className="w-full lg:w-10/12 mt-2 lg:mt-0 px-6 py-3">
                        <Image
                            className="rounded object-cover"
                            src={ postData.image }
                            width={ 690 }
                            height={ 440 }
                            alt=""
                        />
                    </div>
                </div>
            )}
            <div className="my-6 flex flex-wrap lg:flex-nowrap items-center">
                <label htmlFor="title" className="w-full lg:w-2/12">Title</label>
                <input className="w-full lg:w-10/12 mt-2 lg:mt-0
                    px-6 py-3 border border-slate-300 rounded-lg bg-slate-50 
                    focus:bg-white focus-secondary"
                    type="text"
                    name="title"
                    value={ postData.title }
                    onChange={(e) => setData.setTitle(e.target.value)}
                    required
                    aria-required="true"
                />
            </div>
            <div className="my-6 flex flex-wrap lg:flex-nowrap items-center">
                <label htmlFor="title" className="w-full lg:w-2/12">Image URL</label>
                <input className="w-full lg:w-10/12 mt-2 lg:mt-0
                    px-6 py-3 border border-slate-300 rounded-lg bg-slate-50 
                    focus:bg-white focus-secondary"
                    type="text"
                    name="image"
                    value={ postData.image }
                    onChange={(e) => setData.setImage(e.target.value)}
                />
            </div>
            <div className="my-6 flex flex-wrap lg:flex-nowrap items-center">
                <label htmlFor="title" className="w-full lg:w-2/12">Content</label>
                <textarea className="w-full lg:w-10/12 mt-2 lg:mt-0
                    px-6 py-3 border border-slate-300 rounded-lg bg-slate-50 
                    focus:bg-white focus-secondary"
                    name="content"
                    value={ postData.content }
                    onChange={(e) => setData.setContent(e.target.value)}
                />
            </div>
            <div className="my-6 flex flex-wrap lg:flex-nowrap items-center">
                <label htmlFor="title" className="w-full lg:w-2/12">Published</label>
                <div className="w-full lg:w-10/12 mt-2 lg:mt-0">
                    <input className="rounded border-transparent accent-[#945D87] focus-secondary"
                        type="checkbox"
                        name="published"
                        checked={ postData.published }
                        onChange={(e) => setData.setPublished(e.target.checked)}
                    />
                </div>
            </div>
            <div className="my-6 flex justify-end">
                <div className="w-full lg:w-10/12">
                    <button type="submit" className="py-3 px-8
                        rounded-md border-transparent disabled:bg-gray-400 disabled:cursor-not-allowed
                        font-medium text-white bg-secondary hover:bg-secondary-500 hover:shadow
                        focus-secondary">{ post ? 'Update' : 'Create' }</button>
                </div>
            </div>
        </form>
    )
}

export default PostForm