import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '鍦ｇ墝绠＄悊绯荤粺',
  description: '璁板綍姣忎釜浜哄鍑烘潵鍜岀己灏戠殑鍦ｇ墝',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}