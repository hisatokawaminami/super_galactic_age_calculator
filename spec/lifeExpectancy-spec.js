import { LifeExpectancy } from './../src/lifeExpectancy.js';
import { Age }  from './../src/age.js';
import { Birthday }  from './../src/birthday.js';


describe('LifeExpectancy', function(){

  it('should calculate life expectancy based on smoking status and gender', function(){
    let lifeExpectancy = new LifeExpectancy(1989, 7, 11, false, 'female');
    expect(lifeExpectancy.LifeExpectancyCal()).toEqual(55);
  });

  it('should calculate life expectancy based on smoker and male', function(){
    let lifeExpectancy = new LifeExpectancy(1989, 7, 11, true, 'male');
    expect(lifeExpectancy.LifeExpectancyCal()).toEqual(35);
  });

  it('should calculate life expectancy based on smoker and female', function(){
    let lifeExpectancy = new LifeExpectancy(1989, 7, 11, true, 'female');
    expect(lifeExpectancy.LifeExpectancyCal()).toEqual(43);
  });

  it('should clculate how many years a user has left on Earth', function(){
    let lifeExpectancy = new LifeExpectancy(1989, 7, 11, false, 'female');
    expect(lifeExpectancy.LifeExpectancyCal()).toEqual(55);
  });

  it('should calculate how many years a user has left on other planets', function(){
    let lifeExpectancy = new LifeExpectancy(1989, 7, 11, false, 'female');
    let timeLeft = lifeExpectancy.LifeExpectancyCal();
    expect(lifeExpectancy.inMercury(timeLeft)).toEqual(229.17);
  });



});
