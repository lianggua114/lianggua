'use client'

import { useState } from 'react'

interface ScheduleSlot {
  id: string
  user_name: string
  slot_date: string
  slot_time: string
  status: string
  started_at: string | null
  completed_at: string | null
  created_at: string
}

interface ScheduleCalendarProps {
  schedules: ScheduleSlot[]
  onBook: (userName: string, date: string, timeSlot: string) => Promise<void>
  onUpdateStatus: (id: string, status: string) => Promise<void>
}

const timeSlots = [
  { key: 'morning', label: '上午', time: '8:00 - 12:00' },
  { key: 'afternoon', label: '下午', time: '13:00 - 17:00' },
  { key: 'evening', label: '晚上', time: '18:00 - 22:00' },
]

const statusConfig = {
  pending: { label: '待开始', color: 'bg-yellow-100 text-yellow-800', icon: '⏳' },
  in_progress: { label: '进行中', color: 'bg-blue-100 text-blue-800', icon: '🔄' },
  completed: { label: '已完成', color: 'bg-green-100 text-green-800', icon: '✅' },
  overdue: { label: '已超时', color: 'bg-red-100 text-red-800', icon: '⏰' },
}

export default function ScheduleCalendar({ schedules, onBook, onUpdateStatus }: ScheduleCalendarProps) {
  const [userName, setUserName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // 获取当前周的日期
  const getWeekDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date.toISOString().split('T')[0])
    }
    return dates
  }

  const weekDates = getWeekDates()

  // 检查时间段是否已被占用
  const getScheduleForSlot = (date: string, timeSlot: string) => {
    return schedules.find(s => s.slot_date === date && s.slot_time === timeSlot)
  }

  // 处理预约
  const handleBook = async (date: string, timeSlot: string) => {
    if (!userName.trim()) {
      setError('请先填写姓名')
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      await onBook(userName, date, timeSlot)
      setSuccess('预约成功！')
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : '预约失败')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 处理状态更新
  const handleStatusUpdate = async (id: string, status: string) => {
    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      await onUpdateStatus(id, status)
      setSuccess('状态更新成功！')
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : '状态更新失败')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 格式化日期显示
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const days = ['日', '一', '二', '三', '四', '五', '六']
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: date.getMonth() + 1,
    }
  }

  // 获取状态配置
  const getStatusConfig = (status: string) => {
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">工作排班表</h2>
      
      {/* 姓名输入 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          你的姓名 *
        </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="请输入你的姓名"
          className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 提示信息 */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      {/* 日历表格 */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-50">时间段</th>
              {weekDates.map((date) => {
                const { day, date: d, month } = formatDate(date)
                return (
                  <th key={date} className="border border-gray-300 px-4 py-2 bg-gray-50 min-w-[120px]">
                    <div className="text-sm">{month}/{d}</div>
                    <div className="text-xs text-gray-500">周{day}</div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot) => (
              <tr key={slot.key}>
                <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">
                  <div>{slot.label}</div>
                  <div className="text-xs text-gray-500">{slot.time}</div>
                </td>
                {weekDates.map((date) => {
                  const schedule = getScheduleForSlot(date, slot.key)
                  const isBooked = !!schedule
                  const isMyBooking = schedule?.user_name === userName

                  return (
                    <td key={`${date}-${slot.key}`} className="border border-gray-300 px-2 py-2">
                      {isBooked ? (
                        <div className={`text-center p-2 rounded ${
                          isMyBooking ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                        }`}>
                          <div className="font-medium text-sm">{schedule.user_name}</div>
                          
                          {/* 状态显示 */}
                          <div className="mt-1">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                              getStatusConfig(schedule.status).color
                            }`}>
                              {getStatusConfig(schedule.status).icon}
                              {getStatusConfig(schedule.status).label}
                            </span>
                          </div>

                          {/* 状态操作按钮（仅预约人可见） */}
                          {isMyBooking && (
                            <div className="mt-2 flex gap-1 justify-center">
                              {schedule.status === 'pending' && (
                                <button
                                  onClick={() => handleStatusUpdate(schedule.id, 'in_progress')}
                                  disabled={isSubmitting}
                                  className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                                >
                                  开始
                                </button>
                              )}
                              {schedule.status === 'in_progress' && (
                                <button
                                  onClick={() => handleStatusUpdate(schedule.id, 'completed')}
                                  disabled={isSubmitting}
                                  className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                                >
                                  完成
                                </button>
                              )}
                            </div>
                          )}

                          {/* 时间信息 */}
                          {schedule.started_at && (
                            <div className="text-xs text-gray-500 mt-1">
                              开始: {new Date(schedule.started_at).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          )}
                          {schedule.completed_at && (
                            <div className="text-xs text-gray-500">
                              完成: {new Date(schedule.completed_at).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleBook(date, slot.key)}
                          disabled={isSubmitting || !userName.trim()}
                          className="w-full p-2 text-center rounded border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <span className="text-sm text-gray-500">可预约</span>
                        </button>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 图例 */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-dashed border-gray-300 rounded"></div>
          <span>可预约</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
            ⏳ 待开始
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
            🔄 进行中
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
            ✅ 已完成
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
            ⏰ 已超时
          </span>
        </div>
      </div>
    </div>
  )
}