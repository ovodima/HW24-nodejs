const { Person } = require("./Person");

class Students extends Person {
    constructor(name, age, gendor, interests) {
        super(name, age, gendor, interests)
        
    }

    sayAboutMe() {
        console.log(`hello, my name is ${this.name} i'm ${this.age} year old, ${this.gendor}, long time i play ${this.interests}`)
    }
}

exports.Students = Students