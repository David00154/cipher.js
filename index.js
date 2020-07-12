const log = console.log;
const {encrypt} = require('./lib/init');

const cipher = {
 hash: v => {
 	const x = [...v].map(y => encrypt.encode(y)).join('').replace(/\s+/g, "");
 	return x;
 },
 compare: (d, j) => {
 	const x = [...d].map(y => encrypt.encode(y)).join('').replace(/\s+/g, "");
 	if (x === j) {
 		return true;
 	} else {
 		return false;
 	}
 }
};
module.exports.cipher = cipher;
