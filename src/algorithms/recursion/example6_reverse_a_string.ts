import useCountTracker from "./func_call_count_tracker";

const tracker = useCountTracker();

const reverseRecorsively = (str: string): string => {
  tracker.track();
  if (str.length <= 1) {
    return str; // If string has one or less characters, return string back
  }
  return (
    str[str.length - 1] +
    reverseRecorsively(str.slice(1, str.length - 1)) +
    str[0]
  ); // Swap end characters and call reverse for string inner part
};

// Reverse a string using recursion
const result = reverseRecorsively("firefirefire");
console.log(result, tracker.count); // eriferiferif 7

export default reverseRecorsively;
