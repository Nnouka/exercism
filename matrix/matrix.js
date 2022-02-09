//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  
  constructor(str) {
    this.input = str;
  }

  get rows() {
    return this.input.split(/\n/).map(r => r.split(' ').map(n => Number(n)));
  }

  get columns() {
    const columns = [];
    this.rows.forEach((row, i) => {
      row.forEach(
        (item, j) => {
          if (typeof columns[j] === 'undefined') {
            columns[j] = [];
          }
          columns[j][i] = item;
        }
      );
    });
    return columns;
  }
}
