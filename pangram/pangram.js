//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let pangram = true;
  for(let a of alphabets) {
    if(str.toLowerCase().indexOf(a) < 0) {
      pangram = false;
      break;
    }
  }
  return pangram;
};
