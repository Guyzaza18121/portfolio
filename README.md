# Portfolio — สิรวิชญ์ ทิมสุวรรณ

พอร์ตโฟลิโอส่วนตัวแบบ static (HTML/CSS/JS ล้วน) ไม่ต้อง build ใช้งานได้ทันทีบนโฮสต์ใดก็ได้

## โครงสร้าง

```
portfolio/
├── index.html   # โครงหน้าเว็บทั้งหมด (Hero, About, Projects, Skills, Contact)
├── styles.css   # ธีมมืด glassmorphism + แอนิเมชัน
├── script.js    # scroll reveal, typewriter, count-up, filter ผลงาน, spotlight
└── README.md
```

## ดูตัวอย่างในเครื่อง

เปิด `index.html` ด้วยเบราว์เซอร์ได้เลย หรือรันเซิร์ฟเวอร์เล็กๆ:

```bash
# ต้องมี Python
python -m http.server 5173
# แล้วเปิด http://localhost:5173
```

## นำขึ้น Host / Domain

เพราะเป็นไฟล์ static ล้วน สามารถอัปโหลดโฟลเดอร์นี้ขึ้นบริการใดก็ได้:

- **Netlify / Vercel** — ลากโฟลเดอร์วางในหน้า deploy หรือเชื่อม GitHub repo
- **GitHub Pages** — push ขึ้น repo แล้วเปิด Pages ที่ branch หลัก
- **Cloudflare Pages** — เชื่อม repo (ไม่ต้องตั้ง build command)
- **โฮสต์ทั่วไป (cPanel/FTP)** — อัปโหลดทั้ง 3 ไฟล์ไปที่ `public_html`

> ต่อโดเมนเอง: ชี้ DNS ของโดเมนไปที่โฮสต์ที่เลือก แล้วตั้ง `index.html` เป็นหน้าแรก (ค่าเริ่มต้นอยู่แล้ว)

## แก้ไขเนื้อหา

- ข้อมูลติดต่อ/อีเมล: แก้ที่ส่วน `#contact` ใน `index.html` (แทน `hello@example.com`)
- เพิ่ม/แก้ผลงาน: ทำซ้ำบล็อก `<article class="project-card">` ใน `index.html`
- ปรับสี: แก้ตัวแปร `:root` ด้านบนของ `styles.css`

## ผลงานที่รวมไว้

1. **Jewelry Admin** — ระบบจัดการร้านเครื่องประดับ (React, Node/Express, MongoDB, PDF/Excel)
2. **StockFlow** — ระบบจัดการขาย/ค่าใช้จ่าย (Node.js, Express, MongoDB, PM2)
3. **IoT Mobile Dashboard (FOSTEC OEE)** — React 19 + Node-RED + MQTT
4. **3D Models Web Application** — เว็บ 3D + Node-RED + MQTT
5. **Novels** — ระบบเขียนนิยาย
