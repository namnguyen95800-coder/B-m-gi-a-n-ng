<div align="center">

# 🕒 Bấm giờ

**Tập trung, đếm ngược và quản lý thời gian, miễn phí, không cần tài khoản.**

Nhiều loại đồng hồ trong một nơi: dùng ngay trên trình duyệt hoặc cài thành app Android.

<br>

[![Mở website](https://img.shields.io/badge/🌐_Mở_website-2DBE9D?style=for-the-badge)](https://namnguyen95800-coder.github.io/)
[![Tải app Android](https://img.shields.io/badge/📲_Tải_app_Android_(APK)-1f2a44?style=for-the-badge)](https://github.com/namnguyen95800-coder/namnguyen95800-coder.github.io/releases/download/latest/Dousob.apk)

</div>

---

## 👋 Giới thiệu

**Bấm giờ** là dự án cá nhân gom các công cụ thời gian thường dùng vào một trang web gọn nhẹ. Bạn mở lên là dùng được ngay, không quảng cáo, không đăng ký, và vẫn chạy khi mất mạng.

## ✨ Có gì trong app

| Công cụ | Dùng để |
| --- | --- |
| ⏱ **Bấm giờ** | Đếm lên, ghi vòng |
| ⏳ **Đếm ngược** | Đặt thời gian và báo khi hết giờ |
| 🍅 **Pomodoro** | Học và làm việc theo phiên, có giờ nghỉ |
| 💪 **Tập luyện** | Chia thời gian tập và nghỉ |
| 🔗 **Chuỗi bước** | Nối nhiều bước thành một quy trình |
| 📝 **Đồng hồ thi** | Tổng thời gian và các mốc báo |
| 📅 **Đếm ngày** | Đếm ngược đến ngày quan trọng, Tết, ngày lễ |
| ♟️ **Cờ vua** | Đồng hồ cho hai người chơi |
| 🍳 **Nấu ăn** | Canh nhiều món cùng lúc |
| 🌿 **Hít thở** | Thực hành nhịp thở chậm |
| 🔔 **Nhắc nhở** | Nhắc lặp lại theo chu kỳ |
| 🌍 **Giờ thế giới** | Xem giờ nhiều thành phố |
| 😴 **Tính giờ ngủ** | Gợi ý giờ đi ngủ hoặc thức dậy |
| 🧮 **Tính ngày** | Số ngày giữa hai ngày, cộng trừ ngày |

Ngoài ra còn có: nhiều giao diện, âm báo và âm nền, lưu mẫu cài đặt, thống kê theo ngày và tuần, xuất CSV, chế độ tập trung toàn màn hình, tiếng Việt và tiếng Anh.

## 🚀 Cách dùng

### 🌐 Trên trình duyệt
Mở **https://namnguyen95800-coder.github.io/** trên điện thoại hoặc máy tính. Có thể chọn "Cài về màn hình" để thêm vào màn hình chính như một app.

### 📲 Cài app Android (APK)
1. Tải file **[Dousob.apk](https://github.com/namnguyen95800-coder/namnguyen95800-coder.github.io/releases/download/latest/Dousob.apk)** (hoặc vào trang [Releases](https://github.com/namnguyen95800-coder/namnguyen95800-coder.github.io/releases/tag/latest)).
2. Mở file vừa tải. Nếu máy hỏi, cho phép trình duyệt cài ứng dụng từ nguồn không xác định.
3. Mở app và cho phép **thông báo** để nhận chuông khi hết giờ.

> App Android dùng báo thức và thông báo của hệ thống để báo khi hết giờ, đồng thời hiện đồng hồ đang chạy trên thanh thông báo. Nếu chuông không kêu đúng giờ, hãy đặt pin của app ở mức **Không hạn chế** trong cài đặt máy.

## 🔄 Cập nhật

Nội dung app lấy trực tiếp từ website, nên mỗi khi trang web được cập nhật thì app tự có bản mới, không cần cài lại.

## 🛠️ Công nghệ

| Công nghệ | Vai trò |
| --- | --- |
| HTML, CSS, JavaScript | Giao diện và toàn bộ chức năng |
| Service Worker | Dùng được khi không có mạng |
| GitHub Pages | Đưa website lên mạng |
| Capacitor | Đóng gói thành app Android |
| GitHub Actions | Tự động build file APK |

## 📁 Cấu trúc

```text
index.html                    Toàn bộ website
sw.js, manifest.json          Chạy offline và cài về màn hình
icon-192.png, icon-512.png    Icon ứng dụng
.github/workflows/build-apk.yml   Quy trình build APK
```

## 🔨 Build lại APK

Vào tab **Actions**, chọn **Build APK**, bấm **Run workflow**. Sau khoảng vài phút, file `Dousob.apk` mới sẽ xuất hiện ở trang Releases.

---

<div align="center">

Làm bằng 💚 để mỗi phút của bạn đều có ích.

</div>
