// 編寫一個名為table9to9的函式，它打印出九九乘法表的內容。
function table9to9() {
  for (let i = 1; i <= 9; i++) {
    let row = "";
    for (let j = 1; j <= 9; j++) {
      row += i + "x" + j + "=" + i * j;
      console.log(row);
      row = "";
    }
  }
}

table9to9();
