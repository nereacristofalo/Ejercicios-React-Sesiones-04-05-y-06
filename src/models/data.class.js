export default class Data {
  name = '';
  lastName = '';
  date = new Date();
  age = 0;

  constructor(name, lastName, date, age) {
    this.lastName = lastName;
    this.name = name;
    this.age = age;
    this.date = date;
  }
}
