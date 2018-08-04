import { Age } from './../src/age.js';
describe('Age', function(){

  it('should convert age(years) into seconds', function(){
    let ageInSeconds = new Age(29);
    expect(ageInSeconds.inSeconds()).toEqual(915170400);
  });

  it('should convert age into Mercury years', function(){
    let ageInMercury = new Age(29);
    expect(ageInMercury.inMercury()).toEqual(120.83);
  });

  it('should convert age into Venus years', function(){
    let ageInVenus = new Age(29);
    expect(ageInVenus.inVenus()).toEqual(46.77);
  });

  it('should conver age into Mars years', function(){
    let ageInMars = new Age(29);
    expect(ageInMars.inMars()).toEqual(15.43);
  });

  it('should conver age into Jupiter years', function(){
    let ageInJupiter = new Age(29);
    expect(ageInJupiter.inJupiter()).toEqual(2.45);
  });


});
