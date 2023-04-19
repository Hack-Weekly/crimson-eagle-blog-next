import { type NextRequest, NextResponse } from "next/server"
import { getSession } from "next-auth/react"
import { prisma } from "~/server/db"
import { isValidCreatePost, validateCreatePost,
    isValidEditPost, validateEditPost,
    isValidDeletePost, validateDeletePost } from '~/helpers/post-types'

export const POST = (req: NextRequest) => {    
    /* const session = await getSession({ req })
    if (!session || !session.user) {
        return NextResponse.json({
            message: 'Unauthorized',
            error: validateCreatePost(post),
        }, {
            status: 402,
        })
    }*/

    req.json().then(post => {
        if (!isValidCreatePost(post)) {
            return NextResponse.json({
                message: 'Invalid data',
                error: validateCreatePost(post),
            }, {
                status: 400,
            })
        }

        prisma.posts.create({
            data: {
                ...post,
                authorId: post.authorId ? post.authorId : '1', //session.user.id,
            },
        }).then(_result => {
            return NextResponse.json({ success: true })
        }).catch(_err => {
            return NextResponse.json({
                message: 'Prisma error',
            }, {
                status: 400,
            })
        })

    }).catch(_err => {
        return NextResponse.json({
            message: 'Bad request',
        }, {
            status: 400,
        })
    })    
}

export const PUT = (req: NextRequest) => {
    /* const session = await getSession({ req })
    if (!session || !session.user) {
        return NextResponse.json({
            message: 'Unauthorized',
            error: validateCreatePost(post),
        }, {
            status: 402,
        })
    }  */

    req.json().then(post => {
        if (!isValidEditPost(post)) {
            return NextResponse.json({
                message: 'Invalid data',
                error: validateEditPost(post),
            }, {
                status: 400,
            })
        }

        prisma.posts.update({
            where: {
                id: post.id,
            },
            data: {
                ...post,
                // prisma handles this but in case we want to manually update:
                // createdAt: req.body.createdAt ? new Date(req.body.createdAt) : undefined,
                // updatedAt: req.body.updatedAt ? new Date(req.body.updatedAt) : undefined,
                authorId: post.authorId ? post.authorId : '1', //session.user.id,
            },
        }).then(_result => {            
            return NextResponse.json({ success: true })
        }).catch(_err => {
            return NextResponse.json({
                message: 'Prisma error',
            }, {
                status: 400,
            })
        })

    }).catch(_err => {
        return NextResponse.json({
            message: 'Bad request',
        }, {
            status: 400,
        })
    })
}

export const DELETE = (req: NextRequest) => {
    /* const session = await getSession({ req })
    if (!session || !session.user) {
        return NextResponse.json({
            message: 'Unauthorized',
            error: validateCreatePost(post),
        }, {
            status: 402,
        })
    } */

    req.json().then(post => {
        if (!isValidDeletePost(post)) {
            return NextResponse.json({
                message: 'Invalid data',
                error: validateDeletePost(post),
            }, {
                status: 400,
            })
        }

        prisma.posts.delete({
            where: {
                id: post.id,
            },
        }).then(_result => {            
            return NextResponse.json({
                success: true,
            }, {
                status: 200,
            })
        }).catch(_err => {
            return NextResponse.json({
                message: 'Prisma error',
            }, {
                status: 400,
            })
        })

    }).catch(_err => {
        return NextResponse.json({
            message: 'Bad request',
        }, {
            status: 400,
        })
    })
}