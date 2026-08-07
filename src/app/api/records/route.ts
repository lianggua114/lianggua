import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const recordSchema = z.object({
  userName: z.string().min(1, '姓名不能为空'),
  cardName: z.string().min(1, '圣牌名称不能为空'),
  status: z.enum(['多出来', '缺少']),
  quantity: z.number().int().positive('数量必须为正整数'),
  notes: z.string().optional(),
})

export async function GET() {
  try {
    const records = await prisma.holyCardRecord.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(records)
  } catch (error) {
    console.error('获取记录失败:', error)
    return NextResponse.json(
      { error: '获取记录失败' },
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
        { error: '数据验证失败', details: error.errors },
        { status: 400 }
      )
    }

    console.error('创建记录失败:', error)
    return NextResponse.json(
      { error: '创建记录失败' },
      { status: 500 }
    )
  }
}