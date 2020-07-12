const {cipher} = require('./index');
const log = console.log;
const name = "encryptMe"
const n = cipher.hash(name);
log(n)
const a = cipher.compare("encryptMe", n)
log(a)
// if (a === true) {
// 	log("Password correct");
// } else {
// 	log("Incorrect");
// }
