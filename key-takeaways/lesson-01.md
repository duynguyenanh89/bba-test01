# Lesson 01 -  Getting Started

## Git
### Git config for each repository
- `git config user.name "Duy Nguyen"`
- `git config user.email "daniel@gmail.com"`
### Git config for all repositories
- `git config --global user.name "Duy Nguyen"`
- `git config --global user.email "daniel@gmail.com"`
### Config branch default
- `git config --global init.defaultBranch main`
### Check Git username & email
- `git config user.name`
- `git config user.email`

---

## SSH Key (Nên dùng tiêu chuẩn Ed25519 (tiêu chuẩn mới) thay vì RSA (tiêu chuẩn cũ) )
### 1. Tạo SSH Key
- `ssh-keygen -t ed25519 -C "your_email@example.com"`
### 2. Copy nội dung của SSH Public Key
- Windows: `clip < ~/.ssh/id_ed25519.pub`
- Mac: `pbcopy < ~/.ssh/id_ed25519.pub` 
### 3. Thêm SSH Public Key lên Github
- Đăng nhập Github.
- Vào Settings -> SSH and GPG keys.
- Nhấn New SSH Key, đặt tên (ví dụ: "SSH Public Key trên máy Windows/Mac") và dán SSH Public Key bạn vừa copy vào ô Key.
### 4. Kiểm tra kết nối được tới Github chưa
- `ssh -T git@github.com`

---

## Playwright
### Cài đặt
    npm init playwright@latest
### Update
    npm install -D @playwright/test@latest
    npx playwright install --with-deps
### Check version
    npx playwright --version 
### Running
    npx playwright test 