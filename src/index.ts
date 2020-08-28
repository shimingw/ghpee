function longestCommonStart(strArr: string[]): string {
  if (strArr.length < 2) {
    throw Error();
  }
  let commonStr: string = strArr[0].substring(0, 1);
  // 获取最短字符串长度
  let shortestStr = strArr[0].length;
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length < shortestStr) {
      shortestStr = strArr[i].length;
    }
  }

  for (let i = 1; i < shortestStr; i++) {
    for (let j = 1; j < strArr.length; j++) {
      const Zero2IStr = strArr[j].substring(0, i);
      if (commonStr !== Zero2IStr) {
        break;
      }
      if (i > 1) {
        commonStr = Zero2IStr;
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
