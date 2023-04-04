/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  const sortedStrings = strs.sort();

  const initialString = sortedStrings[0];
  const finalString = sortedStrings[sortedStrings.length - 1];
  if (initialString === "") return "";

  let index = 0;
  let prefix = "";

  do {
    if (initialString.charAt(index) === finalString.charAt(index)) {
      prefix += initialString.charAt(index);
      index++;
    }
  } while (
    initialString.charAt(index) === finalString.charAt(index) &&
    index < initialString.length
  );

  return prefix;
};
