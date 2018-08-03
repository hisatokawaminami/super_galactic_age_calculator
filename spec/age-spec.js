import { Age } from './../src/age.js';
describe('Age', function(){

  it('should convert age(years) into seconds', function(){
    let ageInSeconds = new Age(30);
    expect(ageInSeconds.ageInSeconds(30)).toEqual(946728000);
  });


});
