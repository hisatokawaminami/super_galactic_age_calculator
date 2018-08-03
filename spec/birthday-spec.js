import { Birthday } from './../src/birthday.js';
describe('Birthday', function(){

  it('should determine accurate age in based on current time', function(){
    let accurateBirthday = new Birthday(1989, 7, 11);
    expect(accurateBirthday.getAge()).toEqual(29);

  });

  it('should take tow dates and determine the differenc in seconds', function(){
});
});
