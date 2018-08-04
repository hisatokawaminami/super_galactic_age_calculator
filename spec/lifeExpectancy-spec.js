import { LifeExpectancy } from './../src/lifeExpectancy.js';
describe('LifeExpectancy', function(){

  it('should calculate life expectancy based on smoking status and gender', function(){
    let lifeExpectancy = new LifeExpectancy(false, 'female');
    expect(lifeExpectancy.LifeExpectancyCal()).toEqual(84);
  });

  it('should calculate life expectancy based on smoker and male', function(){
    let lifeExpectancy = new LifeExpectancy(true, 'male');
    expect(lifeExpectancy.LifeExpectancyCal()).toEqual(64);
  });

  it('should calculate life expectancy based on smoker and female', function(){
    let lifeExpectancy = new LifeExpectancy(true, 'female');
    expect(lifeExpectancy.LifeExpectancyCal()).toEqual(72);
  });
});
