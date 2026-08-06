import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('寮€濮嬪～鍏呯ず渚嬫暟鎹?..')

  // 娓呯┖鐜版湁鏁版嵁
  await prisma.holyCardRecord.deleteMany()

  // 鍒涘缓绀轰緥鏁版嵁
  const sampleRecords = [
    {
      userName: '寮犱笁',
      cardName: '鍦ｆ瘝鐜涘埄浜?,
      status: '缂哄皯',
      quantity: 2,
      notes: '闇€瑕?寮犲湥姣嶇帥鍒╀簹鍦ｇ墝',
    },
    {
      userName: '鏉庡洓',
      cardName: '鍦ｈ嫢鐟?,
      status: '澶氬嚭鏉?,
      quantity: 1,
      notes: '澶氬嚭1寮犲湥鑻ョ憻鍦ｇ墝',
    },
    {
      userName: '鐜嬩簲',
      cardName: '鍦ｇ背杩﹀嫆',
      status: '缂哄皯',
      quantity: 3,
      notes: '鎬ラ渶3寮犲湥绫宠喀鍕掑湥鐗?,
    },
    {
      userName: '寮犱笁',
      cardName: '鍦ｅ姞鐧惧垪',
      status: '澶氬嚭鏉?,
      quantity: 1,
      notes: '鍙互浜ゆ崲鍏朵粬鍦ｇ墝',
    },
    {
      userName: '璧靛叚',
      cardName: '鍦ｆ媺鏂愬皵',
      status: '缂哄皯',
      quantity: 1,
      notes: '缂哄皯1寮犲湥鎷夋枑灏斿湥鐗?,
    },
  ]

  for (const record of sampleRecords) {
    await prisma.holyCardRecord.create({
      data: record,
    })
  }

  console.log('绀轰緥鏁版嵁濉厖瀹屾垚锛?)
  console.log(`鍒涘缓浜?${sampleRecords.length} 鏉¤褰昤)
}

main()
  .catch((e) => {
    console.error('濉厖鏁版嵁鏃跺嚭閿?', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })