import { Age } from './../src/age.js';
describe('Age', function(){

  it('should convert age(years) into seconds', function(){
    let ageInSeconds = new Age(29);
    expect(ageInSeconds.inSeconds()).toEqual(915170400);
  });

  it('should convert age into Mercury years', function(){
    let ageInMercury = new Age(29);
    expect(ageInMercury.inMercury()).toEqual(121);
  });

});
