//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (left, right) => {
  if(left  === right) return 0;
  if(left.length === 0 ) {
    throw new Error('left strand must not be empty');
  }
  if(right.length === 0 ) {
    throw new Error('right strand must not be empty');
  }
  if(left.length !== right.length) {
    throw new Error('left and right strands must be of equal length');
  }
  let count = 0;
  for(let i = 0; i < left.length; i++) {
    if(left[i] !== right[i])  {
      count++;
    }
  }
  return count;
};
