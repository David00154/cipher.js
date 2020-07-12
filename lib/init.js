const {alphabet} = require('./alphabet');
const encrypt = {
	encode: (x) => {

		const shift = Number('2');

	if (alphabet.includes(x)) {

		const position = alphabet.indexOf(x);

		const newPosition = (position + shift)%26;

		return position * 2 + alphabet[newPosition];

	} else {

		return x;

	}

	}

};
module.exports.encrypt = encrypt;