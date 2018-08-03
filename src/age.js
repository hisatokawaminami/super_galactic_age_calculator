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

  inVenus(){
    let ageInVenus = (this.age / 0.62).toFixed();
    let fixedAge = parseFloat(ageInVenus);
    console.log(fixedAge);
    return fixedAge;
  }

  inMars(){
    let ageInMars = (this.age / 1.88).toFixed();
    let fixedAge = parseFloat(ageInMars);
    console.log(fixedAge);
    return fixedAge;
  }

  inJupiter(){
    let ageInJupiter = (this.age / 11.86).toFixed();
    let fixedAge = parseFloat(ageInJupiter);
    console.log(fixedAge);
    return fixedAge;
  }
}
