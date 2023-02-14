let a = [10, 90, 99, 10, 20, 10];
let x = 10;
let arr = [];
for (let i = 0; i < a.length; i++) {
  if (x === a[i]) {
    arr.push(a[i]);
  }
}
if (arr.length === 0) {
  console.log(x + " is not found  ");
} else if (arr.length === 1) {
  console.log(x + " is found " + arr.length + " time in the array");
} else {
  console.log(x + " is found " + arr.length + " times in the array");
}
