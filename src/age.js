export class Age{
  constructor(age) {
    this.age = age;
  }

  ageInSeconds() {
    let ageInSeconds = age * 31557600;
    return ageInSeconds;
  }
}
 
