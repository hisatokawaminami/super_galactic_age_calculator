import { Age }  from './../src/age.js';
export class LifeExpectancy extends Age{

  constructor(year, month, date, smoker, gender){
    super(year, month, date)
    this.smoker = smoker;
    this.gender = gender;
  }

  LifeExpectancyCal() {
    let lifeExpectancyIndex = 79;
    if (this.smoker === false){
      lifeExpectancyIndex += 2;
      } if (this.smoker === true){
          lifeExpectancyIndex -=10;
        } if (this.gender === 'female'){
          lifeExpectancyIndex += 3;
          } if (this.gender === 'male'){
            lifeExpectancyIndex -= 5;
          }
          let lifeExpectancy = lifeExpectancyIndex - this.getAge();
          console.log(lifeExpectancyIndex);
          console.log(lifeExpectancy);
      return lifeExpectancy;


    }

}
