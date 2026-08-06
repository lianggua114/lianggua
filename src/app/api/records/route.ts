import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const recordSchema = z.object({
  userName: z.string().min(1, '濮撳悕涓嶈兘涓虹┖'),
  cardName: z.string().min(1, '鍦ｇ墝鍚嶇О涓嶈兘涓虹┖'),
  status: z.enum(['澶氬嚭鏉?, '缂哄皯']),
  quantity: z.number().int().positive('鏁伴噺蹇呴』涓烘鏁存暟'),
  notes: z.string().optional(),
})

export async function GET() {
  try {
    const records = await prisma.holyCardRecord.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(records)
  } catch (error) {
    console.error('鑾峰彇璁板綍澶辫触:', error)
    return NextResponse.json(
      { error: '鑾峰彇璁板綍澶辫触' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = recordSchema.parse(body)

    const record = await prisma.holyCardRecord.create({
      data: validatedData,
    })

    return NextResponse.json(record, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '鏁版嵁楠岃瘉澶辫触', details: error.errors },
        { status: 400 }
      )
    }

    console.error('鍒涘缓璁板綍澶辫触:', error)
    return NextResponse.json(
      { error: '鍒涘缓璁板綍澶辫触' },
      { status: 500 }
    )
  }
}