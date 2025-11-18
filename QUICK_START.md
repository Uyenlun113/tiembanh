# Hướng dẫn chạy nhanh

## Bước 1: Cài đặt dependencies

```bash
cd ap-cake
npm install
```

## Bước 2: Cấu hình MongoDB

### Option 1: MongoDB Local
1. Đảm bảo MongoDB đã được cài đặt và đang chạy
2. File `.env.local` đã có sẵn với cấu hình mặc định:
   ```
   MONGODB_URI=mongodb://localhost:27017/ap-cake
   ```

### Option 2: MongoDB Atlas (Cloud)
1. Tạo tài khoản tại https://www.mongodb.com/cloud/atlas
2. Tạo cluster và lấy connection string
3. Cập nhật `MONGODB_URI` trong `.env.local`

## Bước 3: Chạy dự án

```bash
npm run dev
```

Mở trình duyệt: http://localhost:3000

## Bước 4: Truy cập trang quản trị

http://localhost:3000/admin

Tại đây bạn có thể:
- Quản lý danh mục
- Quản lý sản phẩm  
- Quản lý ưu đãi
- Quản lý banner

## Troubleshooting

### Lỗi kết nối MongoDB
- Kiểm tra MongoDB có đang chạy không
- Kiểm tra connection string trong `.env.local`
- Đảm bảo port 27017 không bị chặn

### Lỗi module not found
- Chạy lại `npm install`
- Xóa `node_modules` và `package-lock.json`, sau đó `npm install` lại

