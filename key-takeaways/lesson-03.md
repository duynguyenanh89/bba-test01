# Git & Javascript continue

## Git
### Restore từ Staging về lại Working Directory (ngược lại của flow "git add .")
- `git restore --staged <filename>`
- `git restore --staged .`

### Reset từ Repository về lại Working Directory (ngược lại của flow "git commit -m "<message>")
- `git reset HEAD~<số commit>`
- `git reset HEAD~2`

### Git branch
- `git branch`: Xem danh sách nhánh
- `git branch <tên_branch>`: tạo nhánh mới
- `git checkout <tên_branch>`: chuyển sang nhánh mới
- `git checkout -b <tên_branch>`: tạo và chuyển sang nhánh mới
- `git branch -D <tên_branch>`: Xóa branch (phải đứng ở nhánh khác trước khi xóa)

---

## Naming convention
- `snake_case`: tạm thời không dùng (nguyen_anh_duy)
- `kebab-case`: đặt tên file và folder (nguyen-anh-duy)
- `camelCase`: đặt tên biến, hàm (nguyenAnhDuy)
- `PascalCase`: đặt tên class (NguyenAnhDuy)

---

## Object
- Object key có thể có dấu " " hoặc ' ' hoặc không dấu, nếu Object key name có khoảng trắng thì bắt buộc phải dùng " " hoặc ' ' 
- Object key khuyến khích nên dùng dạng đơn giản, không dùng "" hay ''
- Nhưng trong file JSON thì Object key phải dùng ""
```
const myInfo = {
    name: "Daniel",
    age: 37,
    isLoveCoding: true,
    address: "HCM",
    "address 2": "Da Lat"
    codingClass: {
        name: "Playwright",
        level: "Beginer"
    }
};
```
---

## Array
```
const arr = [1, 3, 7, 9, 11];

const students = [
    { name: "An", score: 9 },
    { name: "Bình", score: 7 },
    { name: "Cường", score: 10 },
    { name: "Danh", score: 7 },
    { name: "Evy", score: 6 },
    { name: "Fury", score: 8 }
];
```

---

## Function
```
function multiply(a, b) {
    const ketQua = a * b;
    console.log(`\nKết quả nhân của ${a}x${b} = ${ketQua}`);
    return ketQua;
}

function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            //topStudents.push(students[i].name, students[i].score);
            topStudents.push({ 
                name: students[i].name, score: students[i].score 
            });
        }
    }
    console.log(`\nDanh sách học sinh có điểm >= ${threshold}: `);
    console.log(topStudents);
    return topStudents;
};
```