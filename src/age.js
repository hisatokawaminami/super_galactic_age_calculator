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
    let ageInMercury = (this.age / 0.24).toFixed(2);
    let fixedAge = parseFloat(ageInMercury);
    console.log(ageInMercury);
    console.log(fixedAge);
    return fixedAge;
  }

  inVenus(){
    let ageInVenus = (this.age / 0.62).toFixed(2);
    let fixedAge = parseFloat(ageInVenus);
    console.log(fixedAge);
    return fixedAge;
  }

  inMars(){
    let ageInMars = (this.age / 1.88).toFixed(2);
    let fixedAge = parseFloat(ageInMars);
    console.log(fixedAge);
    return fixedAge;
  }

  inJupiter(){
    let ageInJupiter = (this.age / 11.86).toFixed(2);
    let fixedAge = parseFloat(ageInJupiter);
    console.log(fixedAge);
    return fixedAge;
  }
}
