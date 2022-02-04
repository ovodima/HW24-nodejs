const { Students } = require('./Student');
const { Teacher } = require('./Teacher');


let student1 = new Students('Jo', 22, 'male', 'Football')
let teacher1 = new Teacher('Bill', 36, 'male', 'Poker', 'History')
student1.sayAboutMe()
teacher1.sayAboutMe()