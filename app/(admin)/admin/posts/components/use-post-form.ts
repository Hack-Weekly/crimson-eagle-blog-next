"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { PostType, CreatePostBody, EditPostBody } from "~/helpers/post-types"

export const usePostForm = ({ post, id }: { post?: PostType, id: string }) => {

    const [title, setTitle] = useState(post && post.title ? post.title : '')
    const [image, setImage] = useState(post && post.image ? post.image : '')
    const [content, setContent] = useState(post && post.content ? post.content : '')
    const [published, setPublished] = useState(post && post.published ? true : false)

    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        if (post) {
            const data: EditPostBody = {
                id: post.id,
                title,
                image,
                content,
                published,
                authorId: post && post.authorId ? post.authorId : id,
            }
            // TODO client side validation
            
            fetch('/api/posts', {
                method: 'PUT',
                body: JSON.stringify(data)
            }).then(res => {
                if (res.status == 400) {
                    // TODO handle results of server side validation
                    console.log(res.json())
                } else {
                    void router.push('/admin/posts')
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            const data: CreatePostBody = {
                title,
                image,
                content,
                published,
                authorId: id,
            }
            // TODO client side validation
            
            fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(res => {
                if (res.status == 400) {
                    // TODO handle results of server side validation
                    console.log(res.json())
                } else {
                    void router.push('/admin/posts')
                }
            }).catch(err => {
                console.log(err)
            })            
        }
        
    }

    return {
        postData: {
            title,
            image,
            content,
            published,
            createdAt: post ? post.createdAt : new Date(),
        },
        setData: {
            setTitle,
            setImage,
            setContent,
            setPublished,
        },
        handleSubmit,
    }
}