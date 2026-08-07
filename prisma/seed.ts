import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始填充示例数据...')

  // 清空现有数据
  await prisma.holyCardRecord.deleteMany()

  // 创建示例数据
  const sampleRecords = [
    {
      userName: '张三',
      cardName: '圣母玛利亚',
      status: '缺少',
      quantity: 2,
      notes: '需要2张圣母玛利亚圣牌',
    },
    {
      userName: '李四',
      cardName: '圣若瑟',
      status: '多出来',
      quantity: 1,
      notes: '多出1张圣若瑟圣牌',
    },
    {
      userName: '王五',
      cardName: '圣米迦勒',
      status: '缺少',
      quantity: 3,
      notes: '急需3张圣米迦勒圣牌',
    },
    {
      userName: '张三',
      cardName: '圣加百列',
      status: '多出来',
      quantity: 1,
      notes: '可以交换其他圣牌',
    },
    {
      userName: '赵六',
      cardName: '圣拉斐尔',
      status: '缺少',
      quantity: 1,
      notes: '缺少1张圣拉斐尔圣牌',
    },
  ]

  for (const record of sampleRecords) {
    await prisma.holyCardRecord.create({
      data: record,
    })
  }

  console.log('示例数据填充完成！')
  console.log(`创建了 ${sampleRecords.length} 条记录`)
}

main()
  .catch((e) => {
    console.error('填充数据时出错:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })