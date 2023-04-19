import { z } from 'zod'

const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    image: z.string().nullable(),
    content: z.string().nullable(),
    published: z.boolean(),
    authorId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date().nullable(),
})
export type PostType = z.infer<typeof PostSchema>

const createPostBodySchema = PostSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})
export type CreatePostBody = z.infer<typeof createPostBodySchema>

export const isValidCreatePost = (body: any): body is CreatePostBody =>
    createPostBodySchema.safeParse(body).success

export const validateCreatePost = (body: any) => {
    const result = createPostBodySchema.safeParse(body)
    return result.success ? 'Post validated' : result.error.issues
}

const editPostBodySchema = PostSchema.omit({
    createdAt: true,
    updatedAt: true,
})
export type EditPostBody = z.infer<typeof editPostBodySchema>

export const isValidEditPost = (body: any): body is EditPostBody => {
    const { success } = editPostBodySchema.safeParse(body)
    return success
}

export const validateEditPost = (body: any) => {
    const result = editPostBodySchema.safeParse(body)
    return result.success ? 'Post validated' : result.error.issues
}

const deletePostBodySchema = z.object({
    id: z.string(),
})
export type DeletePostBody = z.infer<typeof deletePostBodySchema>

export const isValidDeletePost = (body: any): body is DeletePostBody => {
    const { success } = deletePostBodySchema.safeParse(body)
    return success
}

export const validateDeletePost = (body: any) => {
    const result = deletePostBodySchema.safeParse(body)
    return result.success ? 'Post validated' : result.error.issues
}