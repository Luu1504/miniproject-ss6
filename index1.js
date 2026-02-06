let arr = [];
let count = 0;
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Nhập số nguyên thứ " + (i + 1) + ":"));
  arr.push(num);
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    count++;
  }
}
alert("Có " + count + " số nguyên lớn hơn hoặc bằng 10");
