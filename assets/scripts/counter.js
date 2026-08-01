let sum = 0;
let userValue = 0;

while (userValue !== "стоп") {
    userValue = prompt("Введіть число - ");

    if (userValue === null) {
        break;
    } else {
        userValue = Number(userValue);
        sum += userValue;
    }
}

console.log(sum);
