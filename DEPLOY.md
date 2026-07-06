# Deploy Portfolio ฟรี

โปรเจกต์นี้เป็น static site ใช้แค่ `index.html`, `styles.css`, `script.js` จึงเอาขึ้น host ฟรีได้โดยไม่ต้อง build

## วิธีเร็วสุด: Netlify Drop

1. ไปที่ `https://app.netlify.com/drop`
2. ลากโฟลเดอร์ `C:\Profile\portfolio` ไปวาง
3. Netlify จะให้ URL ทันที

## วิธีแนะนำ: GitHub Pages

1. สร้าง repository ใหม่บน GitHub ชื่อ `portfolio`
2. รันคำสั่งในโฟลเดอร์นี้:

```powershell
git remote add origin https://github.com/Guyzaza18121/portfolio.git
git branch -M main
git push -u origin main
```

3. เปิด GitHub repo แล้วไปที่ `Settings` > `Pages`
4. ตั้ง `Source` เป็น `Deploy from a branch`
5. เลือก branch `main` และ folder `/root`
6. รอ 1-3 นาที เว็บจะอยู่ที่:

```text
https://guyzaza18121.github.io/portfolio/
```

## Vercel

1. ไปที่ `https://vercel.com/new`
2. Import GitHub repo `portfolio`
3. ไม่ต้องใส่ build command
4. ตั้ง Output Directory เป็น `.`
5. Deploy

