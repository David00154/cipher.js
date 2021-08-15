# Cipher.js

```sh
$ npm install cipher
```

## Introduction

Cipher.js is an encryption tool used in coding strings of data to unreadeable format.
In cipher it has two methods which are to encrypt strings of data and to compare them.

## How to encrypt string of data
```js
We need to first bring in cipher with curly braces into the project
 const {cipher} = require('cipher');

```

You first need to require cipher with curly braces else it will return an error.

## Use .hash to encrypt data
Using '.hash()' method, you will need to pass a parameter which is the string to be encrypted
```js
const name = "encryptMe"; //this is the data or string to be encrypted
```
Then you will call the method by so
```js
const output = cipher.hash(name); // => "80Q98Z76O106D116I102B110F24O80Q"
```

## Use .compare to compare strings of encrypted data
Using '.compare()' method, you will need to pass two parameters. The first parameter is the unencrypted string to be compared and the second parameter is the encrypted string to be compared with.

The ".compare()" method will return true if the comparison was true and it will also return false if the comparison was false.

lets say we have a data string to be compared which is 

```js
const data = "80Q98Z76O106D116I102B110F24O80Q"; //this is the second parameter
```
So we say
```js
const n = "encryptMe"; //this is the first parameter
````
we put everything together as thus;
```js
const a = cipher.compare(n, data); // => true
````
