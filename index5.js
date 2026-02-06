let n = parseInt(prompt("Nhập số phần tử của mảng:"));
let arr = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    let ch = prompt("Nhập ký tự thứ " + (i + 1) + ":");
    arr.push(ch);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= '0' && arr[i] <= '9') {
        sum += parseInt(arr[i]);
    }
}

alert("Tổng các ký tự số trong mảng là: " + sum);