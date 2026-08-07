import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { z } from 'zod'

const scheduleSchema = z.object({
  userName: z.string().min(1, '姓名不能为空'),
  date: z.string().min(1, '日期不能为空'),
  timeSlot: z.enum(['morning', 'afternoon', 'evening']),
})

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('schedule_slots')
      .select('*')
      .order('slot_date', { ascending: true })
      .order('slot_time', { ascending: true })

    if (error) {
      console.error('获取排班失败:', error)
      return NextResponse.json(
        { error: '获取排班失败' },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('获取排班失败:', error)
    return NextResponse.json(
      { error: '获取排班失败' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = scheduleSchema.parse(body)

    // 检查时间段是否已被占用
    const { data: existing, error: checkError } = await supabase
      .from('schedule_slots')
      .select('id')
      .eq('slot_date', validatedData.date)
      .eq('slot_time', validatedData.timeSlot)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: '该时间段已被其他人选择' },
        { status: 409 }
      )
    }

    // 创建新预约
    const { data, error } = await supabase
      .from('schedule_slots')
      .insert([{
        user_name: validatedData.userName,
        slot_date: validatedData.date,
        slot_time: validatedData.timeSlot,
      }])
      .select()

    if (error) {
      console.error('创建排班失败:', error)
      return NextResponse.json(
        { error: '创建排班失败' },
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

    console.error('创建排班失败:', error)
    return NextResponse.json(
      { error: '创建排班失败' },
      { status: 500 }
    )
  }
}