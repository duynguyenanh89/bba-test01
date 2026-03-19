# Lesson 02: Git & Javascript Basic

## Git
### Init repository 
- `git init`
### Link local to remote GitHub
- `git remote add origin <url>`
### Add file to Staging
- `git add .`
### Commit file 
- `git commit -m <message>`
### Push code lên main
- `git push origin main`
### Push code lên nhánh
- `git push origin <tên_nhánh>`
### Git commit convention
- `chore`: fix minor bug, fix grammar
- `feat`: add new file(s)
- `fix`: fix bug(s), update file
### Amend
- `git commit --amend`  --> mở 1 trình soạn thảo (VIM), để sửa message của commit gần nhất, thêm/bớt file thay vì tạo commit mới
- `git commit --amend -m "<message>"`   --> sửa message gần nhất đã commit trước đó
### Restore
- `git restore --staged <file>` --> restore file từ vùng Staging về lại vùng Working Directory
- `git reset HEAD~1`    --> reset (1 phiên bản/1 commit) mới nhất từ Repository về lại vùng Working Directory

---

## Variable
- `var`
    - Phạm vi sử dụng biến là global
    - Cho phép khai báo lại (ví dụ: var x = 1, var x = 2 --> x = 2)
    - Không nên dùng `var` vì đây là kiểu cũ, không an toàn
- `let`
    - Phạm vi sử dụng biến trong block code {}
    - Không cho phép khai báo lại (Ví dụ let x = 1, let x = 2 --> Lỗi SyntaxError: Identifier 'x' has already been declared)
    - Dùng `let` để khai báo biến khi cần gán lại giá trị cho biến
- `const`: 
    - Phạm vi sử dụng biến trong block code {}
    - Không cho phép khai báo lại (Ví dụ const x = 1, const x = 2 --> Lỗi SyntaxError: Identifier 'x' has already been declared)
    - Dùng `const` để khai báo biến khi không có nhu cầu thay đổi giá trị của biến
    - Mặc định nên dùng `const`, giúp code an toàn, dễ đọc

---

## Config file "package.json"
- `"type": "module"`
    - Nên dùng `type` là `module` thay vì `commonjs` vì đây là chuẩn mới của trình duyệt và Node.js mới
    - Default là bật (use-strict mode), giúp viết code chuẩn hơn, tránh trường hợp quên khai báo biến
    - Hỗ trợ tải bất đồng bộ (asynchronous), tối ưu tốc độ hơn
    - Cú pháp: import / export (chuẩn ECMAScript) thay vì require() / module.exports
    - Khuyến nghị cho dự án mới

---

## Toán tử so sánh
- `Loose Equality: So sánh ==, so sánh giá trị (tự chuyển đổi kiểu)
    - 5 == "5"      --> True (Tự chuyển string thành number để so sánh)
    - true == 1     --> True (true tự chuyển thành 1)
    - false == 0    --> True (false tự chuyển thành 0 để so sánh)
- Strict Equality: So sánh ===, so sánh giá trị và kiểu dữ liệu (không tự chuyển đổi kiểu)
    - 5 === "5"     --> False (khác kiểu dữ liệu)
    - true === 1    --> False (khác kiểu dữ liệu)
    - false === 0   --> False (khác kiểu dữ liệu)
    - 5 === 5       --> True (cùng kiểu dữ liệu, cùng giá trị)
- Toán tử 1 ngôi
```
let a = 10
let b = ++a;    --> tăng giá trị của a lên rồi mới gán giá trị cho b

console.log (`Giá trị của a = ${a}`) --> a = 11
console.log(`Giá trị của b = ${b} `) --> b = 11

let c = 10
let d = c++;    --> gán giá trị của c cho d rồi mới tăng giá trị của c

console.log (`Giá trị của c = ${c}`) --> c = 11
console.log(`Giá trị của d = ${d} `) --> d = 10
```