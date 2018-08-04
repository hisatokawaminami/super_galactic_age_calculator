export class LifeExpectancy{

  constructor(smoker, gender){
    this.smoker = smoker;
    this.gender = gender;

  }

  LifeExpectancyCal() {
    let lifeExpectancy = 79;
    if (this.smoker === false){
      lifeExpectancy += 2;
      } if (this.smoker === true){
          lifeExpectancy -=10;
        } if (this.gender === 'female'){
          lifeExpectancy += 3;
          } if (this.gender === 'male'){
            lifeExpectancy -= 5;
          }
      console.log(lifeExpectancy);
      return lifeExpectancy;

    // inMercuryLE() {
    //   let lifeExpectancy = this.age.LifeExpectancyCal();
    //   console.log(lifeExpectancy);

    // }
  }
}
