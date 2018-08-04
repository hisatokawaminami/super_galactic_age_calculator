import { Birthday } from './../src/birthday.js';
describe('Birthday', function(){

  it('should determine accurate age based on current time', function(){
    let accurateBirthday = new Birthday(1989, 7, 11);
    expect(accurateBirthday.getAge()).toEqual(29);

  });

  it('should determine age base on birthday, but birth month has not come yet', function(){
    let birthday = new Birthday(1989, 9, 1);
    expect(birthday.getAge()).toEqual(28);
  });

  it('should take tow dates and determine the differenc in seconds', function(){
});
})
