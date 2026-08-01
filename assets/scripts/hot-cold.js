const randomNum = Math.floor(Math.random() * 20) + 1;
let userNum = 0;

while (randomNum !== userNum) {
    userNum = prompt("Введіть число від 1 до 20 - ");
    if (userNum === null) {
        break;
    } else {
        userNum = Number(userNum);
    }

    if (userNum !== randomNum) {
        if (userNum >= randomNum - 3 && userNum <= randomNum + 3) {
            console.log("Гаряче");
        } else {
            console.log("Холодно");
        }
    }
}

if (randomNum === userNum) {
    console.log(`Ви виграли!!! Це було число ${randomNum}`);
} else {
    console.log("В наступний раз пощастить");
}
