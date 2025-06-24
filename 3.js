// 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
function isUpperCase(str) {
  if (str.length === 0) {
    return false;
  }

  if (str[0] < "A" || str[0] > "Z") {
    return false;
  }
  return true;
}

console.log(isUpperCase("ABCD"));
console.log(isUpperCase(""));
console.log(isUpperCase("aBCD"));
console.log(isUpperCase("1234"));
