const zipzap = num => {
  var res = '';
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      res += 'zip';
    } else if (i % 5 === 0) {
      res += 'zap';
    } else res += i;
  }
  return res;
};

console.log(zipzap(8));
