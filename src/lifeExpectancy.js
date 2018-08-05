import { Age }  from './../src/age.js';
export class LifeExpectancy extends Age{

  constructor(age, smoker, gender){
    super(age)
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
      console.log(lifeExpectancyIndex);
      return lifeExpectancyIndex;

    // inMercuryLE() {
    //   let lifeExpectancy = this.age.LifeExpectancyCal();
    //   console.log(lifeExpectancy);

    // }
  }
}
