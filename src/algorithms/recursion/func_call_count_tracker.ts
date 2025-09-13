const useCountTracker = () => {
  let count = 0;
  return {
    get count() {
      return count;
    },
    track: function () {
      count++;
    },
  };
};

export default useCountTracker;
