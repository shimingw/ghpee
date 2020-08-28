function longestCommonStart(strArr: string[]): string {
  if (strArr.length < 2) {
    throw Error();
  }
  let commonStr = "";
  let isEndLoop = false;
  // 获取最短字符串长度
  let shortestStrLen = strArr[0].length;
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length < shortestStrLen) {
      shortestStrLen = strArr[i].length;
    }
  }

  for (let i = 1; i <= shortestStrLen; i++) {
    if (isEndLoop) {
      break;
    }
    for (let j = 0; j < strArr.length; j++) {
      const Zero2IStr = strArr[j].substring(0, i);
      // 如果是字符串数组的第一个值，则更新commonStr
      if (j === 0) {
        commonStr = Zero2IStr;
      }
      if (commonStr !== Zero2IStr) {
        isEndLoop = true;
        // 如果跳出循环需要把最后加上的字符串去除
        commonStr = commonStr.substring(0, commonStr.length - 1);
        break;
      }
    }
  }
  return commonStr;
}

// 示例：
console.info(longestCommonStart(["google", "go"]), "go");
// 返回：'go'

console.info(longestCommonStart(["google", "good"]), "goo");
// 返回：'goo'

console.info(longestCommonStart(["abc", "xyz"]), "");
// 返回：''

console.info(longestCommonStart(["hello", "hell", "world"]), "");
// 返回：''
console.info(longestCommonStart(["qwe11", "qwe11qwe", "qwe11qweqwe"]), "qwe11");
