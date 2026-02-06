let n = parseInt(prompt("Nhập số phần tử của mảng:"));
let arr = [];

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(num);
}

let isFibo = true;

if (n > 2) {
    for (let i = 2; i < n; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibo = false;
            break;
        }
    }
}

if (isFibo) {
    alert("Mảng là dãy số Fibonacci");
} else {
    alert("Mảng không phải dãy số Fibonacci");
}