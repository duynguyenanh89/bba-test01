const playerName = "Mario";
const currentLives = 3;
const level1 = 25;
const level2 = 30;
const level3 = 45;

function sum(a, b, c) {
    return (a + b + c);
};

function average(a, b, c) {
    return (a + b + c) / 3;
};

console.log(`- Tổng coin của 3 levels là: ${sum(level1, level2, level3)}`);
console.log(`- Giá trị trung bình là: ${average(level1, level2, level3)}`);
console.log(`- Số coin dư khi chia tổng số coin cho 3 là: ${sum(level1, level2, level3) %3}`);