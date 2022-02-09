//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    const [x, y, z] = sides;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  get isEquilateral() {
    if(this.isTriangle) {
        return this.x === this.y && this.x === this.z && this.z === this.y;
    }
    return false;
  }

  get isIsosceles() {
    if(this.isTriangle) {
      return this.x === this.y || this.x === this.z || this.z === this.y;
    }
    return false;
  }

  get isScalene() {
    if(this.isTriangle) {
      return this.x !== this.y && this.x !== this.z && this.z !== this.y;
    }
    return false;
  }
  get isTriangle() {
      return this.x > 0 
              && this.y > 0 
              && this.z > 0 
              && (this.x + this.y) >= this.z 
              && (this.x + this.z) >= this.y 
              && (this.z + this.y) >= this.x;
  }
}
