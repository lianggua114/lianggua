'use client'

import { useState, useEffect } from 'react'
import HolyCardForm from './components/HolyCardForm'
import HolyCardList from './components/HolyCardList'

interface HolyCardRecord {
  id: string
  user_name: string
  card_name: string
  status: string
  quantity: number
  notes: string | null
  created_at: string
}

export default function Home() {
  const [records, setRecords] = useState<HolyCardRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRecords = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/records')
      if (!response.ok) {
        throw new Error('获取记录失败')
      }
      const data = await response.json()
      setRecords(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '获取记录失败')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRecords()
  }, [])

  const handleSubmit = async (formData: {
    userName: string
    cardName: string
    status: '多出来' | '缺少'
    quantity: number
    notes: string
  }) => {
    const response = await fetch('/api/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || '提交失败')
    }

    // 刷新记录列表
    await fetchRecords()
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          圣牌管理系统
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <HolyCardForm onSubmit={handleSubmit} />
          </div>
          <div>
            <HolyCardList records={records} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </main>
  )
}