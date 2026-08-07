import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
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
    const { data, error } = await supabase
      .from('holy_card_records')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('获取记录失败:', error)
      return NextResponse.json(
        { error: '获取记录失败' },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
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

    const { data, error } = await supabase
      .from('holy_card_records')
      .insert([{
        user_name: validatedData.userName,
        card_name: validatedData.cardName,
        status: validatedData.status,
        quantity: validatedData.quantity,
        notes: validatedData.notes || null,
      }])
      .select()

    if (error) {
      console.error('创建记录失败:', error)
      return NextResponse.json(
        { error: '创建记录失败' },
        { status: 500 }
      )
    }

    return NextResponse.json(data[0], { status: 201 })
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