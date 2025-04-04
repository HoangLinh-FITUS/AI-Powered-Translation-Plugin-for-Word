<h1 align='center'> <strong> AI-Powered Translation Plugin for Google Docs </strong> </h1>


## ℹ️ Overview
Một add-on được phát triển bằng Google Apps Script, cho phép dịch nội dung tài liệu Google Docs sang nhiều ngôn ngữ bằng AI (Google Gemini API).

## 🚀 Tính Năng
- Dịch toàn bộ tài liệu hoặc chỉ dịch phần được chọn trong Google Docs.
- Dịch nhiều ngôn ngữ khác nhau sang ngôn ngữ đích.
- Dịch theo ngữ cảnh (phụ thuộc vào nội dung trong docs).
- Hỗ trợ cài đặt dịch thuật tùy chỉnh để phù hợp với các phong cách viết học thuật và chuyên nghiệp khác nhau.

## 🧠 Công Nghệ Sử Dụng 
- **Google App Script**: xây dựng add-on và tương tác với Google Docs.
- **Google Gemini**: Xử lý và dịch nội dung văn bản.

## ⚙️ Cài Đặt Và Sử Dụng
1. Mở Google Docs $\rightarrow$ Extensions $\rightarrow$ Apps Script.
2. Tạo 2 file gs và html tương ứng.
3. Tạo *GEMINI_API_KEY* và thay thế trong file.gs
4. Chạy file gs với `function onOpen()`.
5. Quay trở lại docs mở translate $\rightarrow$ Translate with ai$. 


## 💡 Demo
### Translate Selected Text Instantly 
- Chọn 1 đoạn trong tài liệu.
- Chọn dịch từ tiếng anh sang tiếng việt.
- Cài đặt `temperature = 0.5`.
- Kiểu dịch thuật là `Academi`.
- Translate Assistance: `Select Text`.
- Sau khi bấm `translate`, nội dung sau khi dịch sẽ được hiển thị bên trong thanh sidebar.

<div align='center'>
<img src="https://i.imgur.com/so0uJ4a.png" alt='select-text' width='500'>
</div>

### Translate The Entire Document
- Chọn 1 đoạn trong tài liệu.
- Chọn dịch từ tiếng anh sang tiếng việt.
- Cài đặt `temperature = 0.5`.
- Kiểu dịch thuật là `Academi`.
- Translate Assistance: `Entire`.
- Sau khi bấm `translate`, nội dung được dịch sẽ ghi đè lên nội dung ban đầu của tài liệu.
<div align='center'>
<img src="https://i.imgur.com/Bf1T4ea.png" alt='select-entire' width='500'>
</div>
