//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (rain) => {
  let sound = "";
  if(rain % 3 === 0) {
    sound += 'Pling';
  }
  if(rain % 5 === 0) {
     sound += 'Plang';
  }
  if(rain % 7 === 0) {
     sound += 'Plong';
  }
  if(sound == "") {
    sound = String(rain);
  }
  return sound;
};
