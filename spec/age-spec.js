import { Age } from './../src/age.js';
describe('Age', function(){

  it('should convert age(years) into seconds', function(){
    let ageInSeconds = new Age(29);
    expect(ageInSeconds.ageInSeconds(29)).toEqual(915170400);
  });

  it('should take tow dates and determine the differenc in seconds', function(){

  })
});
