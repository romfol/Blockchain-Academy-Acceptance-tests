// Напишіть функцію, котра повертає текст з числами від 1 до n.
// При цьому замість чисел, кратних 3, виведіть текст "zip".
// Замість чисел, кратних 5, виведіть текст "zap".

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
