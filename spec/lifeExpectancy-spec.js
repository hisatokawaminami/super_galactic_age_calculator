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
    expect(lifeExpectancy.inVenus(timeLeft)).toEqual(88.71);
    expect(lifeExpectancy.inMars(timeLeft)).toEqual(29.26);
    expect(lifeExpectancy.inJupiter(timeLeft)).toEqual(4.64);

  });

  it('should calculate how many years a user has lived past the life expectancy', function(){
    let lifeExpectancy = new LifeExpectancy(1929, 7, 11, false, 'female');
    expect(lifeExpectancy.LifeExpectancyCal()).toEqual(5);
  });

  it('should calculate how many years a user has lived past the life expectancy on other planets', function(){
    let lifeExpectancy = new LifeExpectancy(1929, 7, 11, false, 'female');
    let timeLeft = lifeExpectancy.LifeExpectancyCal();
    expect(lifeExpectancy.inMercury(timeLeft)).toEqual(20.83);
    expect(lifeExpectancy.inVenus(timeLeft)).toEqual(8.06);
    expect(lifeExpectancy.inMars(timeLeft)).toEqual(2.66);
    expect(lifeExpectancy.inJupiter(timeLeft)).toEqual(0.42);

  });

});
