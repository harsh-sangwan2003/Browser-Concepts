let count = 0;

function debounce(work, delay) {

    let timerId;
    return function () {

        clearInterval(timerId);
        timerId = setInterval(() => {
            work();
        }, delay);
    }
}

function work() {

    console.log("Network Request ", count);
    count++;
}

let optFn = debounce(work, 3000);

let input = document.querySelector('input');
input.addEventListener("keydown", optFn);