let count = 0;

function work(){

    console.log("Network Request ",count);
    count++;
}

function throttle(work,delay){

    let flag = true;
    return function(){

        if(flag){

            work();
            flag = false;
        }

        setTimeout(() => {
            flag = true;
        }, delay);
    }
}

let optFn = throttle(work,5000);
let button = document.querySelector('button');
button.addEventListener("click",optFn);