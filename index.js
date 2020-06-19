// Code your solutions in this file

function writeCards(arr, event) {
    let thanks = []
    for (let i = 0; i < arr.length; i++) {
        thanks.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return thanks
}


function countDown(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
}
