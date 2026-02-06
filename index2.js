let arr = [];

while (arr.length < 10) {
    let num = parseInt(prompt("Nhập số nguyên khác nhau thứ " + (arr.length + 1) + ":"));

    if (!arr.includes(num)) {
        arr.push(num);
    } else {
        alert("Số đã tồn tại, nhập số khác");
    }
}

let max = arr[0];
let position = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        position = i;
    }
}

alert("Giá trị lớn nhất là: " + max + "\nVị trí: " + position);