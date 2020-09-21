function Person(name, age, hobbies){
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.addyear = function(){
        this.age++;
    },
    this.countOfHobbies = function(){
        return this.hobbies.length;
    }
}
const p1 = new Person("Vakho", 27, ["sports", "music"]);
const p2 = new Person("Dato", 28, ["reading", "music"]);
const p3 = new Person("Roin", 28, ["sports", "porn"]);