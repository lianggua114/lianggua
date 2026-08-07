'use client'

import { useState, useEffect } from 'react'
import ScheduleCalendar from './components/ScheduleCalendar'

interface ScheduleSlot {
  id: string
  user_name: string
  slot_date: string
  slot_time: string
  created_at: string
}

export default function Home() {
  const [schedules, setSchedules] = useState<ScheduleSlot[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSchedules = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/records')
      if (!response.ok) {
        throw new Error('获取排班失败')
      }
      const data = await response.json()
      setSchedules(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '获取排班失败')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSchedules()
  }, [])

  const handleBook = async (userName: string, date: string, timeSlot: string) => {
    const response = await fetch('/api/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, date, timeSlot }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || '预约失败')
    }

    // 刷新排班列表
    await fetchSchedules()
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">加载中...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          工作排班系统
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <ScheduleCalendar 
          schedules={schedules} 
          onBook={handleBook} 
        />

        {/* 统计信息 */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">排班统计</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{schedules.length}</div>
              <div className="text-sm text-gray-500">总预约数</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {new Set(schedules.map(s => s.user_name)).size}
              </div>
              <div className="text-sm text-gray-500">参与人数</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {new Set(schedules.map(s => s.slot_date)).size}
              </div>
              <div className="text-sm text-gray-500">已排班天数</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}