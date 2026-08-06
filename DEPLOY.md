# 鍦ｇ墝绠＄悊绯荤粺 - 瀹屾暣閮ㄧ讲鎸囧崡锛堟棤闇€鍛戒护琛岋級

## 馃殌 涓€閿儴缃叉柟妗?
### 绗竴姝ワ細鍒涘缓Supabase鏁版嵁搴擄紙5鍒嗛挓锛?
1. **璁块棶 Supabase**
   - 鎵撳紑娴忚鍣紝璁块棶 https://supabase.com
   - 鐐瑰嚮 "Start your project" 鎸夐挳
   - 浣跨敤GitHub璐﹀彿鐧诲綍锛堟帹鑽愶級鎴栭偖绠辨敞鍐?
2. **鍒涘缓鏂伴」鐩?*
   - 鐧诲綍鍚庯紝鐐瑰嚮 "New Project"
   - 濉啓淇℃伅锛?     - Organization: 閫夋嫨鎴栧垱寤轰竴涓粍缁?     - Project name: `holy-card-management`
     - Database Password: 璁剧疆涓€涓己瀵嗙爜锛?*璇疯浣忚繖涓瘑鐮?*锛?     - Region: 閫夋嫨 "Northeast Asia (Tokyo)" 鎴栧叾浠栫浣犺繎鐨勫尯鍩?   - 鐐瑰嚮 "Create new project"
   - 绛夊緟1-2鍒嗛挓鍒涘缓瀹屾垚

3. **鑾峰彇鏁版嵁搴撹繛鎺ュ瓧绗︿覆**
   - 椤圭洰鍒涘缓瀹屾垚鍚庯紝鐐瑰嚮宸︿晶鑿滃崟 "Settings" (榻胯疆鍥炬爣)
   - 鐐瑰嚮 "Database"
   - 鎵惧埌 "Connection string" 閮ㄥ垎
   - 鐐瑰嚮 "URI" 鏍囩
   - 澶嶅埗杩炴帴瀛楃涓诧紝鏍煎紡濡傦細
     ```
     postgresql://postgres:[YOUR-PASSWORD]@db.xxx.supabase.co:5432/postgres
     ```
   - **閲嶈**锛氬皢 `[YOUR-PASSWORD]` 鏇挎崲涓轰綘鍒氭墠璁剧疆鐨勫瘑鐮?
4. **鍒涘缓鏁版嵁搴撹〃**
   - 鐐瑰嚮宸︿晶鑿滃崟 "SQL Editor"
   - 鐐瑰嚮 "New query"
   - 澶嶅埗浠ヤ笅SQL浠ｇ爜骞剁矘璐达細

```sql
CREATE TABLE IF NOT EXISTS "holy_card_records" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
  "userName" TEXT NOT NULL,
  "cardName" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL DEFAULT 1,
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "holy_card_records_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "holy_card_records_userName_idx" ON "holy_card_records"("userName");
CREATE INDEX IF NOT EXISTS "holy_card_records_status_idx" ON "holy_card_records"("status");

-- 鎻掑叆绀轰緥鏁版嵁锛堝彲閫夛級
INSERT INTO "holy_card_records" ("userName", "cardName", "status", "quantity", "notes") VALUES
('寮犱笁', '鍦ｆ瘝鐜涘埄浜?, '缂哄皯', 2, '闇€瑕?寮犲湥姣嶇帥鍒╀簹鍦ｇ墝'),
('鏉庡洓', '鍦ｈ嫢鐟?, '澶氬嚭鏉?, 1, '澶氬嚭1寮犲湥鑻ョ憻鍦ｇ墝'),
('鐜嬩簲', '鍦ｇ背杩﹀嫆', '缂哄皯', 3, '鎬ラ渶3寮犲湥绫宠喀鍕掑湥鐗?);
```

   - 鐐瑰嚮 "Run" 鎸夐挳鎵ц
   - 鐪嬪埌 "Success" 琛ㄧず鍒涘缓鎴愬姛

### 绗簩姝ワ細灏嗕唬鐮佷笂浼犲埌GitHub锛?鍒嗛挓锛?
1. **鍒涘缓GitHub浠撳簱**
   - 璁块棶 https://github.com
   - 鐧诲綍浣犵殑璐﹀彿
   - 鐐瑰嚮鍙充笂瑙?"+" 鈫?"New repository"
   - 濉啓淇℃伅锛?     - Repository name: `holy-card-management`
     - Description: 鍦ｇ墝绠＄悊绯荤粺
     - 閫夋嫨 "Public"锛堝厤璐归儴缃查渶瑕侊級
     - 鍕鹃€?"Add a README file"
   - 鐐瑰嚮 "Create repository"

2. **涓婁紶椤圭洰鏂囦欢**
   - 鍦ㄦ柊寤虹殑浠撳簱椤甸潰锛岀偣鍑?"uploading an existing file"
   - 灏嗕互涓嬫枃浠?鏂囦欢澶规嫋鎷藉埌娴忚鍣細
     - `src/` 鏂囦欢澶?     - `prisma/` 鏂囦欢澶?     - `package.json`
     - `tsconfig.json`
     - `next.config.js`
     - `tailwind.config.ts`
     - `postcss.config.js`
     - `vercel.json`
     - `.gitignore`
     - `.env.example`
     - `README.md`
     - `DEPLOY.md`
   - **娉ㄦ剰**锛氫笉瑕佷笂浼?`.env` 鏂囦欢锛堝寘鍚瘑鐮侊級
   - 鍦ㄩ〉闈㈠簳閮ㄥ～鍐欐彁浜や俊鎭細"Initial commit"
   - 鐐瑰嚮 "Commit changes"

### 绗笁姝ワ細閮ㄧ讲鍒癡ercel锛?鍒嗛挓锛?
1. **璁块棶 Vercel**
   - 鎵撳紑娴忚鍣紝璁块棶 https://vercel.com
   - 鐐瑰嚮 "Sign Up" 鎴?"Log In"
   - 浣跨敤GitHub璐﹀彿鐧诲綍

2. **瀵煎叆椤圭洰**
   - 鐧诲綍鍚庯紝鐐瑰嚮 "Add New..." 鈫?"Project"
   - 鍦?"Import Git Repository" 閮ㄥ垎锛屾壘鍒颁綘鍒氬垱寤虹殑 `holy-card-management` 浠撳簱
   - 鐐瑰嚮 "Import"

3. **閰嶇疆椤圭洰**
   - Framework Preset: 浼氳嚜鍔ㄨ瘑鍒负 "Next.js"
   - Root Directory: 淇濇寔榛樿 `./`
   - 灞曞紑 "Environment Variables" 閮ㄥ垎

4. **娣诲姞鐜鍙橀噺**
   - Name: `DATABASE_URL`
   - Value: 绮樿创浣犲湪Supabase鑾峰彇鐨勮繛鎺ュ瓧绗︿覆锛堝凡鏇挎崲瀵嗙爜鐨勫畬鏁寸増鏈級
   - 鐐瑰嚮 "Add"

5. **閮ㄧ讲**
   - 鐐瑰嚮 "Deploy" 鎸夐挳
   - 绛夊緟2-3鍒嗛挓閮ㄧ讲瀹屾垚
   - 閮ㄧ讲鎴愬姛鍚庝細鏄剧ず鎭枩椤甸潰

6. **鑾峰彇璁块棶閾炬帴**
   - 閮ㄧ讲瀹屾垚鍚庯紝鐐瑰嚮 "Continue to Dashboard"
   - 鍦ㄩ」鐩〉闈紝浣犱細鐪嬪埌涓€涓煙鍚嶏紝鏍煎紡濡傦細
     ```
     https://holy-card-management-xxx.vercel.app
     ```
   - 杩欏氨鏄綘鐨勫簲鐢ㄨ闂摼鎺ワ紒

### 绗洓姝ワ細楠岃瘉閮ㄧ讲锛?鍒嗛挓锛?
1. **璁块棶搴旂敤**
   - 鐐瑰嚮Vercel鎻愪緵鐨勯摼鎺?   - 鎴栬€呭鍒堕摼鎺ュ埌娴忚鍣ㄦ墦寮€

2. **娴嬭瘯鍔熻兘**
   - 鍦ㄨ〃鍗曚腑濉啓濮撳悕鍜屽湥鐗屼俊鎭?   - 鐐瑰嚮鎻愪氦
   - 鏌ョ湅涓嬫柟鏄惁鏄剧ず浜嗕綘鐨勮褰?   - 鍒锋柊椤甸潰锛岀‘璁ゆ暟鎹凡淇濆瓨

3. **鍒嗕韩缁欎粬浜?*
   - 灏嗛摼鎺ュ彂閫佺粰闇€瑕佷娇鐢ㄧ殑浜?   - 浠栦滑鍙渶鍦ㄦ祻瑙堝櫒涓墦寮€閾炬帴鍗冲彲浣跨敤
   - 鏃犻渶涓嬭浇浠讳綍涓滆タ锛?
## 馃帀 閮ㄧ讲瀹屾垚锛?
鐜板湪浣犲彲浠ワ細
- 灏嗛摼鎺ュ垎浜粰鎵€鏈変汉
- 鎵€鏈変汉鍙互鍦ㄦ祻瑙堝櫒涓洿鎺ュ～鍐欏拰鏌ョ湅鍦ｇ墝淇℃伅
- 鏁版嵁瀛樺偍鍦ㄤ簯绔紝瀹夊叏鍙潬
- 瀹屽叏鍏嶈垂浣跨敤

## 馃摫 浣跨敤璇存槑

### 瀵逛簬绠＄悊鍛橈紙浣狅級锛?- 鍙互鍦⊿upabase鎺у埗鍙版煡鐪嬪拰绠＄悊鎵€鏈夋暟鎹?- 鍙互鍦╒ercel鎺у埗鍙版煡鐪嬭闂粺璁″拰鏃ュ織
- 鍙互闅忔椂鏇存柊浠ｇ爜骞堕噸鏂伴儴缃?
### 瀵逛簬鏅€氱敤鎴凤細
- 鍙渶鐐瑰嚮閾炬帴鍗冲彲璁块棶
- 鏃犻渶娉ㄥ唽鎴栫櫥褰?- 濉啓濮撳悕鍚庡嵆鍙彁浜ゅ湥鐗屼俊鎭?- 鎵€鏈変汉鐨勮褰曢兘浼氬疄鏃舵樉绀?
## 馃敡 甯歌闂

### Q: 閮ㄧ讲澶辫触鎬庝箞鍔烇紵
A: 妫€鏌ercel鐨勬瀯寤烘棩蹇楋紝甯歌鍘熷洜锛?- 鐜鍙橀噺 `DATABASE_URL` 鏈纭缃?- Supabase鏁版嵁搴撴湭姝ｇ‘鍒涘缓琛?
### Q: 鏁版嵁搴撹繛鎺ュけ璐ワ紵
A: 妫€鏌ワ細
- Supabase椤圭洰鏄惁姝ｅ父杩愯
- 杩炴帴瀛楃涓蹭腑鐨勫瘑鐮佹槸鍚︽纭?- 瀵嗙爜涓槸鍚︽湁鐗规畩瀛楃闇€瑕乁RL缂栫爜

### Q: 濡備綍鏇存柊搴旂敤锛?A: 鍦℅itHub浠撳簱涓笂浼犳柊鏂囦欢锛孷ercel浼氳嚜鍔ㄩ噸鏂伴儴缃层€?
### Q: 濡備綍鏌ョ湅鏁版嵁搴撳唴瀹癸紵
A: 鐧诲綍Supabase鎺у埗鍙帮紝鐐瑰嚮 "Table Editor" 鏌ョ湅銆?
### Q: 濡備綍澶囦唤鏁版嵁锛?A: Supabase浼氳嚜鍔ㄥ浠斤紝涔熷彲浠ュ湪鎺у埗鍙版墜鍔ㄥ鍑恒€?
## 馃搳 鍏嶈垂棰濆害璇存槑

### Vercel鍏嶈垂棰濆害锛?- 100GB甯﹀/鏈?- 100娆￠儴缃?澶?- 瓒冲涓汉椤圭洰浣跨敤

### Supabase鍏嶈垂棰濆害锛?- 500MB鏁版嵁搴?- 1GB鏂囦欢瀛樺偍
- 50,000鏈堟椿鐢ㄦ埛
- 瓒冲鏈」鐩娇鐢?
## 馃攼 瀹夊叏寤鸿

1. **瀹氭湡澶囦唤鏁版嵁**
   - 鍦⊿upabase鎺у埗鍙板畾鏈熷鍑烘暟鎹?
2. **鐩戞帶浣跨敤鎯呭喌**
   - 鍦╒ercel鍜孲upabase鎺у埗鍙版煡鐪嬩娇鐢ㄧ粺璁?
3. **鏇存柊渚濊禆**
   - 瀹氭湡鏇存柊package.json涓殑渚濊禆鐗堟湰

4. **淇濇姢鐜鍙橀噺**
   - 涓嶈灏?`.env` 鏂囦欢涓婁紶鍒癎itHub
   - 涓嶈鍦ㄤ唬鐮佷腑纭紪鐮佸瘑鐮?
## 馃摓 鎶€鏈敮鎸?
濡傛灉閬囧埌闂锛?1. 鏌ョ湅Vercel鏋勫缓鏃ュ織
2. 鏌ョ湅Supabase鏁版嵁搴撴棩蹇?3. 妫€鏌ユ祻瑙堝櫒鎺у埗鍙伴敊璇俊鎭?4. 鍙傝€冨畼鏂规枃妗ｏ細
   - Next.js: https://nextjs.org/docs
   - Prisma: https://www.prisma.io/docs
   - Supabase: https://supabase.com/docs
   - Vercel: https://vercel.com/docs

---

**鎭枩锛?* 浣犲凡缁忔垚鍔熼儴缃蹭簡鍦ｇ墝绠＄悊绯荤粺锛侌煄