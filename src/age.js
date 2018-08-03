export class Age {
  constructor(age) {
    this.age = age;
  }

  inSeconds() {
    let ageInSeconds = this.age * 31557600;
    console.log(ageInSeconds);

    return ageInSeconds;
  }

  inMercury(){
    let ageInMercury = (this.age / 0.24).toFixed();
    let fixedAge = parseFloat(ageInMercury);
    console.log(ageInMercury);
    console.log(fixedAge);
    return fixedAge;
  }
}
