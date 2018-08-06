export class Age {
  constructor(year, month, date){
    this.year = year;
    this.month = month;
    this.date = date;
  }

  getAge() {
    const today = new Date();
    console.log(today.getFullYear());
    let birthday = new Date(this.year, this.month, this.date);
    console.log(birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    console.log(m);
    if (m < 0) {
      age--;
    }
    console.log(age)
    return age;

  }

  inSeconds() {

    let ageInSeconds = this.getAge() * 31557600;
    console.log(ageInSeconds);
    return ageInSeconds;
  }

  inMercury(age){
    let ageInMercury = (age/ 0.24).toFixed(2);
    let fixedAge = parseFloat(ageInMercury);
    console.log(ageInMercury);
    console.log(fixedAge);
    return fixedAge;
  }

  inVenus(age){
    let ageInVenus = (age/ 0.62).toFixed(2);
    let fixedAge = parseFloat(ageInVenus);
    console.log(fixedAge);
    return fixedAge;
  }

  inMars(age){
    let ageInMars = (age/ 1.88).toFixed(2);
    let fixedAge = parseFloat(ageInMars);
    console.log(fixedAge);
    return fixedAge;
  }

  inJupiter(age){
    let ageInJupiter = (age/ 11.86).toFixed(2);
    let fixedAge = parseFloat(ageInJupiter);
    console.log(fixedAge);
    return fixedAge;
  }
}
