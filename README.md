# ⏱ Bấm giờ

> **23 công cụ quản lý thời gian trong một trang web. Miễn phí. Không quảng cáo. Dùng được cả khi không có mạng.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-namnguyen95800--coder.github.io-2DBE9D?style=for-the-badge&logo=githubpages)](https://namnguyen95800-coder.github.io/)
[![Download APK](https://img.shields.io/badge/📲_Download_APK-Android-3DDC84?style=for-the-badge&logo=android)](https://github.com/namnguyen95800-coder/namnguyen95800-coder.github.io/releases/download/latest/Dousob.apk)
[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?style=for-the-badge&logo=pwa)](https://namnguyen95800-coder.github.io/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## 🎯 Tại sao Bấm giờ?

Hầu hết các ứng dụng đồng hồ chỉ làm **một việc**: hoặc bấm giờ, hoặc Pomodoro, hoặc đếm ngược. **Bấm giờ** gộp **23 công cụ** vào một giao diện duy nhất — không cần chuyển app, không cần đăng ký, không có quảng cáo, và chạy được ngay cả khi bạn đang ở trên máy bay.

---

## ✨ Tính năng nổi bật

### 🕐 23 công cụ trong một nơi

| Nhóm | Công cụ |
|------|---------|
| **⏱️ Bộ đếm giờ** | Bấm giờ, Đếm ngược, Pomodoro, Tập luyện, Chuỗi bước, Đồng hồ thi, Đếm ngày, Cờ vua, Nấu ăn |
| **📚 Học tập** | Hít thở, Nhắc nhở định kỳ, Chuỗi thói quen |
| ** Tiện ích** | Giờ thế giới, Tính giờ ngủ, Tính ngày, Âm lịch, Tính tuổi, Cộng trừ giờ, Tính lương giờ |
| **🌿 Thư giãn** | Đồng hồ để bàn (5 kiểu), Mặt trời mọc/lặn, Máy gõ nhịp, Nhạc của tôi |

### 🚀 Điểm khác biệt

- **📴 Offline-first**: Service Worker cache toàn bộ app — chạy mượt khi mất mạng.
- **🔔 Báo thức hệ thống (APK)**: Dùng `LocalNotifications` + `keepAwake` của Capacitor — chuông kêu đúng giờ kể cả khi tắt màn hình.
- **🎨 10 giao diện**: Tự động, Sáng, Tối, Biển, Rừng, Hồng, Mint, Studio, Midnight Luxe, Aurora Pop, Glass Luxe.
- **️ 5 kiểu đồng hồ để bàn**: Số lớn, Lật (flip), Neon, Tối giản (thin), Kim (analog SVG).
- **📊 Thống kê thông minh**: Time Replay, heatmap Ít/Nhiều, mục tiêu phút/ngày, xuất CSV.
- **🌙 Lịch âm chuẩn**: Thuật toán Hồ Ngọc Đức, múi giờ +7, kèm 40+ ngày lễ Việt Nam.
- **🎧 6 âm nền**: Mưa, Ồn trắng, Ồn nâu, Sóng biển, Gió, Lửa trại — tích hợp với Pomodoro.
- **️ Phím tắt đầy đủ**: `Space` bắt đầu/dừng, `L` ghi vòng, `R` đặt lại, `F` toàn màn hình, `1-9` chuyển công cụ.
- **🌐 Song ngữ**: Tiếng Việt & Tiếng Anh, tự động theo trình duyệt.

---

##  Cài đặt

### Cách 1: Dùng ngay trên web (khuyến nghị)

Mở trình duyệt và truy cập: **[namnguyen95800-coder.github.io](https://namnguyen95800-coder.github.io/)**

Trên điện thoại: menu trình duyệt → **"Thêm vào màn hình chính"** để cài như app (PWA).

### Cách 2: Tải APK cho Android

1. Vào **[Releases](https://github.com/namnguyen95800-coder/namnguyen95800-coder.github.io/releases/latest)**
2. 2. Tải file `Dousob.apk`
3. 3. Cài đặt và cấp quyền thông báo
> ⚠️ **Lưu ý**: APK được build bằng Capacitor, có thể bị cảnh báo Play Protect vì không qua Google Play. Đây là file an toàn, mã nguồn mở.

---

## 🛠️ Cấu trúc kỹ thuật

```
.
├── index.html          # Toàn bộ app trong 1 file (~340 KB)
├── sw.js               # Service Worker (cache-first + network race)
├── manifest.json       # PWA manifest
├── icon-192.png        # Icon PWA
├── icon-512.png        # Icon PWA
├── og-image.png        # Open Graph image
└── README.md           # Bạn đang đọc file này
```

### Công nghệ

- **Vanilla JS** — không framework, không dependency, load cực nhanh.
- **Capacitor** — bridge native cho APK (LocalNotifications, Filesystem, Share).
- **Service Worker** — chiến lược network-first với fallback 4 giây.
- **LocalStorage** — toàn bộ dữ liệu người dùng lưu trên thiết bị, không server.

### Thuật toán đặc biệt

- **Lịch âm**: thuật toán Hồ Ngọc Đức, múi giờ +7, hỗ trợ tháng nhuận.
- **Mặt trời mọc/lặn**: tính toán astronomical dựa trên kinh độ/vĩ độ.
- **Đồng hồ flip**: animation CSS 3D với `rotateX` và `backface-visibility`.

---

## 📊 Roadmap

- [ ] Deep link cho từng công cụ (`/#/pomodoro`, `/#/chess`...) để SEO tốt hơn
- - [ ] Thẻ chia sẻ đếm ngược dạng ảnh (PNG + QR)
- [ ] Phòng Pomodoro chung (multiplayer focus)
- - [ ] Sao lưu/khôi phục toàn bộ qua JSON
- [ ] Đổi tên file APK thành `BamGio.apk` cho nhất quán thương hiệu
- - [ ] Đưa lên Google Play Store

---

##  Đóng góp

Dự án này được xây dựng với tình yêu cho sự đơn giản. Nếu bạn thấy hữu ích:

1. **⭐ Star repo** này để ủng hộ
2. 2. ** Báo lỗi** qua Issues
3. 3. **💡 Đề xuất tính năng** mới
4. 4. **☕ Ủng hộ tác giả** qua mã QR trên trang chủ
---

##  License

MIT License — tự do sử dụng, sửa đổi, phân phối.

---

## 👤 Tác giả

**NGUYEN HAI NAM**

-  Web: [namnguyen95800-coder.github.io](https://namnguyen95800-coder.github.io/)
-  -  GitHub: [namnguyen95800-coder](https://github.com/namnguyen95800-coder)

---

> *"Thời gian của bạn. Bạn làm chủ thời gian."*

