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
```js
Using '.hash()' method, you will need to pass a parameter which is the string to be encrypted
const name = "encryptMe"; //this is the data or string to be encrypted

Then you will call the method by so

const output = cipher.hash(name);

If you console.log the output variable, it will be as thus;
"80Q98Z76O106D116I102B110F24O80Q"



```

## Use .compare to compare strings of encrypted data

```js
Using '.compare()' method, you will need to pass two parameters. The first parameter is the unencrypted string to be compared and the second parameter is the encrypted string to be compared with.

The ".compare()" method will return true if the comparison was true and it will also return false if the comparison was false.

lets say we have a data string to be compared which is 
const data = "80Q98Z76O106D116I102B110F24O80Q"; //this is the second parameter

So we say

const n = "encryptMe"; //this is the first parameter

we put everything together as thus;

const a = cipher.compare(n, data);

if we console.log the variable a, it will give us true because n is equal to data.

````
