//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.

//

export class NucleotideCounts {
  static parse(strand) {
    const dict = new Map([
      ['A', 0],
      ['C', 0],
      ['G', 0],
      ['T', 0]
    ]);
    if(strand.length === 0) return [...dict.values()].reduce((a, b) => a + " " + b);
    let it = strand.toUpperCase();
    for(let s of it) {
      if(dict.has(s)) {
        dict.set(s, dict.get(s) + 1);
      } else {
        throw new Error('Invalid nucleotide in strand');
      }
    }
    return [...dict.values()].reduce((a, b) => a + " " + b);
  }
}
