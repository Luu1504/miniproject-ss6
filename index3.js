let n = parseInt(prompt("Nhập số phần tử của mảng:"));
let arr = [];
let countNegative = 0;

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(num);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        countNegative++;
    }
}
alert("Số lượng số nguyên âm trong mảng là: " + countNegative);