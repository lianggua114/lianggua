'use client'

import { useState } from 'react'

interface FormData {
  userName: string
  cardName: string
  status: '澶氬嚭鏉? | '缂哄皯'
  quantity: number
  notes: string
}

interface HolyCardFormProps {
  onSubmit: (data: FormData) => Promise<void>
}

export default function HolyCardForm({ onSubmit }: HolyCardFormProps) {
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    cardName: '',
    status: '缂哄皯',
    quantity: 1,
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      await onSubmit(formData)
      setFormData({
        userName: '',
        cardName: '',
        status: '缂哄皯',
        quantity: 1,
        notes: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : '鎻愪氦澶辫触')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">娣诲姞鍦ｇ墝璁板綍</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            濮撳悕 *
          </label>
          <input
            type="text"
            value={formData.userName}
            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            鍦ｇ墝鍚嶇О *
          </label>
          <input
            type="text"
            value={formData.cardName}
            onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            鐘舵€?*
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as '澶氬嚭鏉? | '缂哄皯' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            <option value="缂哄皯">缂哄皯</option>
            <option value="澶氬嚭鏉?>澶氬嚭鏉?/option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            鏁伴噺 *
          </label>
          <input
            type="number"
            min="1"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            澶囨敞
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '鎻愪氦涓?..' : '鎻愪氦'}
      </button>
    </form>
  )
}