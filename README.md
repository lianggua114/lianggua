# 鍦ｇ墝绠＄悊绯荤粺

涓€涓畝鍗曠殑鍐呭绠＄悊绯荤粺锛岀敤浜庤褰曟瘡涓汉澶氬嚭鏉ュ拰缂哄皯鐨勫湥鐗屻€?
**閮ㄧ讲鍚庯紝鐢ㄦ埛鍙渶璁块棶閾炬帴鍗冲彲浣跨敤锛屾棤闇€涓嬭浇浠讳綍涓滆タ锛?*

## 鍔熻兘鐗规€?
- 鐢ㄦ埛濉啓鑷繁澶氬嚭鏉ユ垨缂哄皯鐨勫湥鐗屼俊鎭?- 鎵€鏈変汉鐨勫～鍐欑粨鏋滃疄鏃跺睍绀哄湪椤甸潰涓嬫柟
- 鏀寔鍦ｇ墝鍚嶇О銆佺姸鎬侊紙澶氬嚭鏉?缂哄皯锛夈€佹暟閲忋€佸娉ㄧ瓑淇℃伅
- 鍝嶅簲寮忚璁★紝鏀寔妗岄潰鍜岀Щ鍔ㄧ
- 瀹屽叏鍏嶈垂閮ㄧ讲锛屾棤闇€鏈嶅姟鍣?
## 鎶€鏈爤

- **鍓嶇**: Next.js 14 + React 18 + TypeScript
- **鍚庣**: Next.js API Routes
- **鏁版嵁搴?*: PostgreSQL (Supabase) + Prisma ORM
- **鏍峰紡**: Tailwind CSS
- **楠岃瘉**: Zod
- **閮ㄧ讲**: Vercel + Supabase

## 馃殌 蹇€熼儴缃诧紙鏃犻渶鍛戒护琛岋級

璇︾粏閮ㄧ讲姝ラ璇锋煡鐪?**[DEPLOY.md](./DEPLOY.md)**

### 閮ㄧ讲娴佺▼姒傝锛?
1. **鍒涘缓Supabase鏁版嵁搴?*锛?鍒嗛挓锛?   - 璁块棶 https://supabase.com 鍒涘缓鍏嶈垂璐﹀彿
   - 鍒涘缓鏂伴」鐩紝鑾峰彇鏁版嵁搴撹繛鎺ュ瓧绗︿覆
   - 鎵цSQL鍒涘缓鏁版嵁搴撹〃

2. **涓婁紶浠ｇ爜鍒癎itHub**锛?鍒嗛挓锛?   - 鍒涘缓GitHub浠撳簱
   - 涓婁紶椤圭洰鏂囦欢

3. **閮ㄧ讲鍒癡ercel**锛?鍒嗛挓锛?   - 璁块棶 https://vercel.com 浣跨敤GitHub鐧诲綍
   - 瀵煎叆椤圭洰锛岃缃幆澧冨彉閲?   - 涓€閿儴缃?
4. **鍒嗕韩閾炬帴**
   - 灏嗛儴缃插悗鐨勯摼鎺ュ垎浜粰鍏朵粬浜?   - 浠栦滑鍙渶鍦ㄦ祻瑙堝櫒涓墦寮€鍗冲彲浣跨敤

## 椤圭洰缁撴瀯

```
鈹溾攢鈹€ prisma/
鈹?  鈹溾攢鈹€ schema.prisma      # 鏁版嵁搴?schema
鈹?  鈹斺攢鈹€ seed.ts            # 绀轰緥鏁版嵁
鈹溾攢鈹€ src/
鈹?  鈹溾攢鈹€ app/
鈹?  鈹?  鈹溾攢鈹€ api/records/   # API 璺敱
鈹?  鈹?  鈹溾攢鈹€ components/    # React 缁勪欢
鈹?  鈹?  鈹溾攢鈹€ globals.css    # 鍏ㄥ眬鏍峰紡
鈹?  鈹?  鈹溾攢鈹€ layout.tsx     # 甯冨眬缁勪欢
鈹?  鈹?  鈹斺攢鈹€ page.tsx       # 涓婚〉闈?鈹?  鈹斺攢鈹€ lib/
鈹?      鈹斺攢鈹€ prisma.ts      # Prisma 瀹㈡埛绔?鈹溾攢鈹€ .env.example           # 鐜鍙橀噺绀轰緥
鈹溾攢鈹€ vercel.json            # Vercel 閮ㄧ讲閰嶇疆
鈹溾攢鈹€ DEPLOY.md              # 璇︾粏閮ㄧ讲鎸囧崡
鈹斺攢鈹€ README.md              # 椤圭洰璇存槑
```

## 鏁版嵁妯″瀷

### HolyCardRecord (鍦ｇ墝璁板綍)

| 瀛楁 | 绫诲瀷 | 璇存槑 |
|------|------|------|
| id | String | 涓婚敭 |
| userName | String | 濉啓浜哄鍚?|
| cardName | String | 鍦ｇ墝鍚嶇О |
| status | String | 鐘舵€侊細"澶氬嚭鏉? 鎴?"缂哄皯" |
| quantity | Int | 鏁伴噺 |
| notes | String? | 澶囨敞锛堝彲閫夛級 |
| createdAt | DateTime | 鍒涘缓鏃堕棿 |
| updatedAt | DateTime | 鏇存柊鏃堕棿 |

## API 鎺ュ彛

### GET /api/records
鑾峰彇鎵€鏈夊湥鐗岃褰曪紝鎸夊垱寤烘椂闂村€掑簭鎺掑垪銆?
### POST /api/records
鍒涘缓鏂扮殑鍦ｇ墝璁板綍銆?
**璇锋眰浣?**
```json
{
  "userName": "寮犱笁",
  "cardName": "鍦ｆ瘝鐜涘埄浜?,
  "status": "缂哄皯",
  "quantity": 2,
  "notes": "闇€瑕?寮犲湥姣嶇帥鍒╀簹鍦ｇ墝"
}
```

## 鏈湴寮€鍙?
濡傛灉浣犳兂鍦ㄦ湰鍦板紑鍙戯細

### 1. 瀹夎渚濊禆

```bash
npm install
```

### 2. 鍒濆鍖栨暟鎹簱

```bash
# 鎺ㄩ€佹暟鎹簱 schema
npm run db:push

# 濉厖绀轰緥鏁版嵁锛堝彲閫夛級
npm run db:seed
```

### 3. 鍚姩寮€鍙戞湇鍔″櫒

```bash
npm run dev
```

璁块棶 http://localhost:3000 鏌ョ湅搴旂敤銆?
## 寮€鍙戝懡浠?
```bash
# 寮€鍙戞ā寮?npm run dev

# 鏋勫缓鐢熶骇鐗堟湰
npm run build

# 鍚姩鐢熶骇鐗堟湰
npm run start

# 浠ｇ爜妫€鏌?npm run lint

# 鏁版嵁搴撴搷浣?npm run db:push      # 鎺ㄩ€?schema 鍒版暟鎹簱
npm run db:seed      # 濉厖绀轰緥鏁版嵁
npm run db:studio    # 鎵撳紑 Prisma Studio锛堟暟鎹簱鍙鍖栵級
```

## 鐜鍙橀噺

### 鏈湴寮€鍙?澶嶅埗 `.env.example` 涓?`.env` 骞跺～鍐欙細

```env
DATABASE_URL="postgresql://postgres:your-password@your-host:5432/postgres"
```

### 鐢熶骇鐜
鍦╒ercel涓缃幆澧冨彉閲忥細
- `DATABASE_URL`: Supabase鏁版嵁搴撹繛鎺ュ瓧绗︿覆

## 娉ㄦ剰浜嬮」

- 鏈郴缁熶笉闇€瑕佺敤鎴疯璇侊紝姣忎釜浜哄～鍐欒嚜宸辩殑濮撳悕鍗冲彲
- 閮ㄧ讲鍚庣敤鎴峰彧闇€璁块棶閾炬帴鍗冲彲浣跨敤锛屾棤闇€涓嬭浇浠讳綍涓滆タ
- 鎵€鏈夋暟鎹瓨鍌ㄥ湪浜戠PostgreSQL鏁版嵁搴撲腑
- 鏀寔澶氫汉鍚屾椂璁块棶鍜岀紪杈?- 瀹屽叏鍏嶈垂閮ㄧ讲 (Vercel + Supabase鍏嶈垂棰濆害)

## 鍏嶈垂棰濆害

### Vercel鍏嶈垂棰濆害锛?- 100GB甯﹀/鏈?- 100娆￠儴缃?澶?- 瓒冲涓汉椤圭洰浣跨敤

### Supabase鍏嶈垂棰濆害锛?- 500MB鏁版嵁搴?- 1GB鏂囦欢瀛樺偍
- 50,000鏈堟椿鐢ㄦ埛
- 瓒冲鏈」鐩娇鐢?
## 璁稿彲璇?
MIT

## 鎶€鏈敮鎸?
濡傛灉閬囧埌闂锛岃鏌ョ湅锛?- [DEPLOY.md](./DEPLOY.md) - 璇︾粏閮ㄧ讲鎸囧崡
- Vercel鏂囨。: https://vercel.com/docs
- Supabase鏂囨。: https://supabase.com/docs
- Next.js鏂囨。: https://nextjs.org/docs