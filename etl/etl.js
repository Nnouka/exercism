//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let it = {};
  Object.keys(old).forEach(
    o => {
      old[o].forEach(
        that => {
          it = {...it, [that.toLowerCase()]: Number(o)}
        }
      );
    }
  );
  return it;
};
