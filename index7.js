let n = parseInt(prompt("Nhập số phần tử của mảng:"));
let arr = [];

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(num);
}

let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
    }
}

if (secondMax === -Infinity) {
    alert("Không tìm được số lớn thứ hai");
} else {
    alert("Số lớn thứ hai trong mảng là: " + secondMax);
}