# Javascript continue

## Variable
### `var`
    - Phạm vi sử dụng biến là global
    - Cho phép khai báo lại (ví dụ: var x = 1, var x = 2 --> x = 2)
    - Không nên dùng `var` vì đây là kiểu cũ, không an toàn
### `let`
    - Phạm vi sử dụng biến trong block code {}
    - Không cho phép khai báo lại (Ví dụ let x = 1, let x = 2 --> Lỗi SyntaxError: Identifier 'x' has already been declared)
    - Dùng `let` để khai báo biến khi cần gán lại giá trị cho biến
### `const`: 
    - Phạm vi sử dụng biến trong block code {}
    - Không cho phép khai báo lại (Ví dụ const x = 1, const x = 2 --> Lỗi SyntaxError: Identifier 'x' has already been declared)
    - Dùng `const` để khai báo biến khi không có nhu cầu thay đổi giá trị của biến
    - Mặc định nên dùng `const`, giúp code an toàn, dễ đọc

---

## Loop
- `break`: Chấm dứt hoàn toàn vòng lặp ngay lập tức, nhảy đến câu lệnh đầu tiên sau thân vòng lặp.
- `continue`: Kết thúc lần lặp hiện tại và nhảy sang lần lặp kế tiếp, không chạy tất cả các lệnh đằng sau continue (trong phạm vi của vòng lặp for)
- `for ... in`: duyệt qua thuộc tính (properties) của 1 object,
- `for...in` hoặc `for...of`, nên ưu tiên dùng `const` thay vì `let` đối với vòng lặp này 
    ```
    const person = {
        name: "John Doe",
        age: 30,
        city: "New York"
    };

    for (const key in person) {
        console.log(key);
        // console.log(person[key]);
        //console.log(key + ": " + person[key]);
    };
    ```
- `forEach`: duyệt qua từng phần tử của mảng và thực thi 1 hàm callback cho mỗi phần tử đó
    ```
    const numbers = [23, 234,53,7542,342,632,124]
    numbers.forEach(n=> console.log(n))
    ```

---

## Utils
- `String`
    - `trim()`: bỏ khoảng trắng 2 đầu của chuỗi.  
        - (e.g.: `let text = "   Hello World   "`;
        - `console.log (text.trim()); --> "Hello World"`)
    - `trimStart()`: bỏ khoảng trắng đầu chuỗi
    - `trimEnd()`: bỏ khoảng trắng cuối chuỗi
    - `toUpperCase()`: chữ thường --> chữ hoa
    - `toLowerCase()`: chữ hoa --> chữ thường
    - `includes("abc")`: Kiểm tra chuỗi có chuỗi con (abc) hay không
    - `split("@")`: cắt chuỗi theo dấu @
    - `replace("chữ muốn thay thế","thay thế bằng chữ")`: thay thế chuỗi
    
- `Array`
    - `arr.push(7)`: thêm phần tử "7" vào cuối mảng
    - `arr.unshift(9)`: thêm phần từ "9" vào đầu mảng
    - `arr.splice(index, 0 , x)`: thêm phần tử "x" vào trước "index"
    - `arr.pop()`: xóa phần tử cuối mảng
    - `arr.shift()`: xóa phần tử đầu mảng
    - `arr.splice(index, số lượng phần tử muốn xóa)`: xóa số lượng phần tử bắt đầu từ index
    - `arr.splice(index, số lượng phần tử muốn xóa, x)`: xóa số lượng phần tử bắt đầu từ index, thêm phần tử x vào sau những số vừa xóa
    - `find()`: trả về phần tử đầu tiên hợp lệ 
        ```
        let first = arr.find(x => x >8);
        console.log(first);
        ```
    - `filter()`: trả về tất cả phần tử hợp lệ 
        ```
        let all = arr.filter(x => x >8);
        console.log(all);
        ```
    - `map`: tạo mảng mới bằng cách áp dụng 1 hàm lên từng phần tử của mảng gốc
        ```
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map(number => number * 2);
        console.log(doubled);

        const students = ['An', 'Bình', 'Cường'];
        const studentList = students.map((lastName, index) => ({
            id: index + 1,
            lastName: lastName,
            code: `SV00${index + 1}`
        }));

        console.log(studentList);
        ```
    - `reduce`: duyệt qua mảng và tích lũy các phần tử thành 1 giá trị duy nhất
        ```
        const numbers = [1, 2, 3, 5, 8, 13];
        const totalNumbers = numbers.reduce((sum,item) => {return sum + item},0);
        console.log(totalNumbers)

        const cart = [
            {product: 'laptop', price: 1000, quantity: 1},
            {product: 'mouse', price: 5, quantity:200},
            {product: 'monitor', price: 200, quantity: 5},
            {product: 'keyboard', price: 10, quantity: 100},
            {product: 'ram', price: 100, quantity: 10}
        ];

        //Tính tổng tiền giỏ hàng
        const totalAmount = cart.reduce((total, item) => {return total + (item.price * item.quantity)}, 0);
        console.log (`Tổng tiền: ${totalAmount} USD`);

        //Tính tổng số lượng sản phẩm
        const totalItems = cart.reduce((count, item) => {return count + item.quantity }, 0);
        console.log(`Số lượng sản phẩm: ${totalItems} `);
        ```
    - `some`: Kiểm tra xem có ít nhất 1 phần tử trong mảng thỏa điều kiện hay không. Return True/False
        ```
        const number = [1,3,5,7,8,9,10];
        const hasEven = number.some(num => {
            console.log(num); 
            return num%2 === 0
        });
        console.log(hasEven);

        const hasGreaterThan5 = number.some(num => {
            console.log(num);
            return num>=5;
        });
        console.log(hasGreaterThan5)

        const products = [
            { name: 'iPhone', stock: 10 },
            { name: 'Samsung', stock: 7 },
            { name: 'Oppo', stock: 0 },
            { name: 'Xiaomi', stock: 8 },
        ];

        // Kiểm tra xem trong kho còn sản phẩm nào hết hàng không
        const hasOutOfStock = products.some(p => {
            console.log(p);
            return p.stock === 0
        });
        console.log(hasOutOfStock); // true

        const developers = [
            { name: "An", skills: ["HTML", "CSS"] },
            { name: "Bình", skills: ["JavaScript", "React"] },
            { name: "Chi", skills: ["Python", "Django"] }
        ];

        // Kiểm tra xem có ai biết "JavaScript" không
        const hasJSExpert = developers.some(dev => dev.skills.includes("JavaScript"));
        console.log(hasJSExpert); // true (vì có Bình)
        ```
    - `every`: Kiểm tra xem tất cả phần tử trong mảng thỏa điều kiện hay không. Return True/False
        ```
        const numbers = [2, 3, 6, 8, 10];

        const everyEvenNumber = numbers.every(num => num%2 === 0);
        console.log(everyEvenNumber);
        ```
    - `sort`: sắp xếp các phần tử trong mảng theo thứ tự mặc định (alphabet/tăng dần)
        ```
        // Sort chuỗi
        const fruits = ['grape', 'banana', 'apple', 'orange', 'durian'];
        console.log(fruits.sort()); // [ 'apple', 'banana', 'durian', 'grape', 'orange' ]

        //Sort số
        const numbers = [2, 1, 10, 100, 5, 8]
        console.log(numbers.sort()); // [ 1, 10, 100, 2, 5, 8 ]
        ```
    - `sort((a,b) => a-b)`: sort tăng dần 
        ```
        arr.sort((a, b) => a - b); 
        console.log(arr);
        ```
    - `sort((a,b) => b-a)`: sort giảm dần 
        ```
        arr.sort((a, b) => b - a); 
        console.log(arr);
        ``` 

## Toán tử điều kiện (Ternary operator)
```
let age = 18
let status = age > 18 ? "Người lớn" : "Trẻ em"
console.log(status)
```