import useCountTracker from "./func_call_count_tracker";

const tracker = useCountTracker();

const reverseRecorsively = (str: string): string => {
  const reverse = (i: number, s: string): string => {
    tracker.track();
    if (i === s.length) return "";
    return reverse(i + 1, s) + s[i];
  };
  return reverse(0, str);
};

// Reverse a string using recursion
const result = reverseRecorsively("firefirefire");
console.log(result, tracker.count); // eriferiferif 13

export default reverseRecorsively;
