let count = [];
for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
        if ((i + j) % 17 === 0 && i <= j){
            count.push([i,j]);
            console.log(`(${i}, ${j}),`);
        }   
    }
};
console.log(count);
console.log(`Có tổng cộng ${count.length} cặp số từ 1 đến 100 mà tổng của nó chia hết cho 17`);
