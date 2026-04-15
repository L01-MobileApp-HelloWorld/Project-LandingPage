# Bận hay Lười? — Landing Page

Landing page dự án đồ án Mobile App Development.

## Cấu trúc file

```
banhayluoi-landing/
├── index.html      ← Trang chính
├── style.css       ← Toàn bộ CSS
├── main.js         ← JavaScript tương tác
└── images          ← Thư mục chứa ảnh giao diện
└── README.md       ← File này
```

## Cách deploy lên GitHub Pages

### Bước 1 — Tạo repository trên GitHub

1. Vào **github.com** → đăng nhập
2. Click nút **"+"** góc trên phải → **"New repository"**
3. Repository name: `banhayluoi-landing` (hoặc tên bạn muốn)
4. Chọn **Public** (bắt buộc để GitHub Pages hoạt động)
5. **Không** tick "Add a README file"
6. Click **"Create repository"**

### Bước 2 — Upload file lên GitHub

**Cách dễ nhất (không cần biết Git):**

1. Sau khi tạo repo, click **"uploading an existing file"**
2. Kéo thả cả 3 file: `index.html`, `style.css`, `main.js` vào
3. Scroll xuống → **"Commit changes"** → **"Commit directly to main"**
4. Click **"Commit changes"**

**Hoặc dùng Git (nếu đã cài):**

```bash
# Trong thư mục banhayluoi-landing/
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/TEN_BAN/banhayluoi-landing.git
git push -u origin main
```

### Bước 3 — Bật GitHub Pages

1. Vào repo vừa tạo → tab **"Settings"**
2. Sidebar trái → click **"Pages"**
3. Mục **"Source"** → chọn **"Deploy from a branch"**
4. Mục **"Branch"** → chọn **"main"** → **"/ (root)"**
5. Click **"Save"**

### Bước 4 — Lấy link public

- Đợi khoảng **1–2 phút** để GitHub build
- Refresh trang Settings → Pages
- Link sẽ hiện dạng: `https://TEN_BAN.github.io/banhayluoi-landing/`
- Copy link này nộp cho thầy!

---

## 🔗 Cập nhật link Figma & Behance

Mở file `index.html`, tìm và thay thế tất cả:

```
href="https://www.figma.com"
```
→ thay bằng link Figma thật của nhóm

```
href="https://www.behance.net"
```
→ thay bằng link Behance thật của nhóm

Có thể dùng Ctrl+H (Find & Replace) trong VS Code hoặc Notepad++.

---

## Checklist trước khi nộp

- [ ] 3 file đã upload lên GitHub
- [ ] GitHub Pages đã bật, có link public
- [ ] Link Figma thật đã được thay vào
- [ ] Link Behance thật đã được thay vào
- [ ] Mở link trên điện thoại kiểm tra responsive
- [ ] Mở link ở tab ẩn danh (incognito) để test public access
