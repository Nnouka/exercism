//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hrs, mins = 0) {
    this.hrs = hrs;
    this.mins = mins;
  }

  toString() {
    return `${this.hours < 10 ? '0' + this.hours : this.hours}:${this.minutes < 10 ? '0' + this.minutes : this.minutes}`;
  }

  plus(addMin) {
    this.mins += addMin;
    return this;
  }

  minus(minusMin) {
    this.mins -= minusMin;
    return this;
  }

  equals(other) {
    return this.hours === other.hours && this.minutes === other.minutes;
  }
  
  get hours() {
    const it = (this.hrs + Math.floor(this.mins / 60)) % 24; 
    return it > 0 ? it : (24 + it) % 24;
  }
  get minutes() {
    const it = this.mins % 60
    return it > 0 ? it : (60 + it) % 60;
  }
}
