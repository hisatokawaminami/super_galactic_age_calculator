import { LifeExpectancy } from './../src/lifeExpectancy.js';
import { Age }  from './../src/age.js';
import { Birthday }  from './../src/birthday.js';


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

  // it('should clculate life expenctancy in Mercury years', function(){
  //   let lifeExpectancyInMercury = new LifeExpectancy(false, 'female');
  //   expect(lifeExpectancyInMercury.inMercury()).toEqual(120);
  // });
});
