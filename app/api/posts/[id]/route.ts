import { type NextRequest, NextResponse } from "next/server"
// import { getSession } from "next-auth/react"
import { prisma } from "~/server/db"

export const DELETE = (req: NextRequest, { params }: { params: { id: string } }) => {
    /* const session = await getSession({ req })
    if (!session || !session.user) {
        return NextResponse.json({
            message: 'Unauthorized',
        }, {
            status: 402,
        })
    } */

    const postId = params.id

    if (!postId) {
        return NextResponse.json({
            message: 'Invalid data: missing post ID',
        }, {
            status: 400,
        })
    }
    
    prisma.posts.delete({
        where: {
            id: postId,
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
}