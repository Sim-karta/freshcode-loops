const counterBtnElement = document.querySelector(".counter-btn");

const count = () => {
    let sum = 0;
    let userValue = 0;

    while (true) {
        userValue = prompt("Введіть число - ");

        if (userValue === null || userValue === "стоп") {
            break;
        } else {
            userValue = Number(userValue);
            sum += userValue;
        }
    }

    console.log(sum);
};

counterBtnElement.addEventListener("click", count);
