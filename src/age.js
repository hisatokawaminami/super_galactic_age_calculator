export class Age{
  constructor(age) {
    this.age = age;
  }

  ageInSeconds(age) {
    let ageInSeconds = (age * 31557600);
    console.log(ageInSeconds);

    return ageInSeconds;
  }

}
