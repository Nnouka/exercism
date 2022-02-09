//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const WEEKDAY = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};

export const meetup = (yr, m, slang, dayName) => {
    const mon = m - 1;
    const getFirst = (start) => {
      let it = new Date(yr, mon, start);
      for(let i = 0; i < 7; i++ ) {
        if(it.getDay() == WEEKDAY[dayName]) {
          if(it.getMonth() == mon) {
            return it;
          }
        }
        it.setDate(it.getDate()  + 1);
      }
      return it;
    }
    const getLast = () => {
      let it = new Date(yr, mon + 1);
      for(let i = 0; i < 7; i++) {
        if(it.getDay() == WEEKDAY[dayName]) {
          if(it.getMonth() == mon) {
            return it;
          }
        }
        it.setDate(it.getDate()  - 1);
      }
      return it;
    }
    switch(slang) {
      case 'teenth':
          return getFirst(13);
      case 'last':
          return getLast();    
      default:
        let first = getFirst(1);
        if(slang == 'second') {
          first.setDate(first.getDate() + 7);
        } else if(slang == 'third') {
          first.setDate(first.getDate() + 14);
        } else if(slang == 'fourth') {
          first.setDate(first.getDate() + 21);
        }
        return first;
    }

};
