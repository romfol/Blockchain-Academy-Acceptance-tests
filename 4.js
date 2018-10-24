const getWaterAmount = arr => {
  let max = Math.max.apply(null, arr);
  let water = 0;
  for (let y = 1; y <= max; y++) {
    let outhole = false;
    let hole = 0;

    for (let x = 0; x < arr.length; x++) {
      if (arr[x] >= y) {
        if (outhole) {
          outhole = false;
          water += hole;
          x--;
        } else {
          outhole = true;
          hole = 0;
        }
      } else {
        hole++;
      }
    }
  }

  return water;
};

console.log('Units of water:', getWaterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 3]));
