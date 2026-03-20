// Bài 1:
function createCharacters() {
    // Mảng characters chứa các object, có các thuộc tính name, level, health
    const characters = [
        { name: 'Mario', level: 3, health: 500 },
        { name: 'Luigi', level: 5, health: 800 },
        { name: 'Duy', level: 7, health: 5000 },
        { name: 'Alice', level: 2, health: 1000 },
        { name: 'Mi', level: 8, health: 1500 }
    ];

    // Hàm map tạo mảng mới charactersPowerUp
    const charactersPowerUp = characters.map(c => ({
        name: c.name.toUpperCase(),
        level: c.level * 2,
        health: c.health * 3
    }));
    console.log(`\n- Mảng mới charactersPowerUp:`, charactersPowerUp);

    // Hàm filter để lọc ra các phần tử có chỉ số health > 1000
    const possibleWinners = characters.filter(c => c.health > 1000);
    console.log(`\n- Các phần tử có chỉ số health > 1000\n`, possibleWinners);
    // console.log(possibleWinners)
};

createCharacters();


// Bài 2:
const players = [
    { name: 'Phong', score: 500 },
    { name: 'Mario', score: 1000 },
    { name: 'Yoshi', score: 800 },
    { name: 'Peach', score: 850 },
    { name: 'Luigi', score: 900 },
];
function printLeaderboard(players) {
    //Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp
    const topScore = players.sort((a, b) => b.score - a.score);
    console.log(`\n- Thứ tự người chơi theo score từ cao đến thấp:`, topScore);

    //In ra bảng xếp hạng: Cách 1
    console.log (`\n In ra BXH Cách 1:`)
    topScore.forEach((n, index) => {
        let medal = '';
        if (index === 0) {
            medal = '🥇';
            console.log(medal + ' ' + (index + 1) + '. ' + n.name + ' - ' + n.score.toLocaleString() + ' pts');
        }
        else if (index === 1) {
            medal = '🥈';
            console.log(medal + ' ' + (index + 1) + '. ' + n.name + ' - ' + n.score.toLocaleString() + ' pts');
        }
        else if (index === 2) {
            medal = '🥉';
            console.log(medal + ' ' + (index + 1) + '. ' + n.name + ' - ' + n.score.toLocaleString() + ' pts');
        }
        else {
            console.log('   ' + (index + 1) + '. ' + n.name + ' - ' + n.score.toLocaleString() + ' pts')
        }
    });

    //In ra Bảng xếp hạng: Cách 2
    console.log("\nIn ra BXH: Cách 2")
    const topScore1 = topScore.map((t, index) =>({
        medal:  index === 0 ? '🥇':
                index === 1 ? '🥈':
                index === 2 ? '🥉':'  ',
        stt: index+1,
        name: t.name,
        score: t.score
    }));
    topScore1.forEach(n => console.log(n.medal, n.stt + '.', n.name + ' - ', n.score.toLocaleString() + ' pts') );
};

printLeaderboard(players);

