//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COMPLEMENT = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}
export const toRna = (dna) => {
  if(dna){
    if(dna.length === 0) return dna;
    if(dna.length === 1)  return COMPLEMENT[dna];
    return dna.split('').map(n => COMPLEMENT[n]).join('');
  } 
  return dna;
};
