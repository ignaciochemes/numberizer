# Numberizer ![Build Status](https://travis-ci.org/mrhooray/rpg.png?branch=master)

## Installation
> npm install numberizer

## Usage

Sync
```js
const numberizer = require('numberizer');

// Generate a random number between 1 and 100
let amount1 = numberizer.GenericRandom(1);
// result: number between 0 and 9
let amount2 = numberizer.GenericRandom(2);
// result: number between 00 and 99
let amount3 = numberizer.GenericRandom(3);
// result: number between 000 and 999

// 18 is the max number of digits

const { GenericRandom } = require('numberizer');

// Generate a random number between 1 and 100
let amount1 = GenericRandom(1);
// result: number between 0 and 9
let amount2 = GenericRandom(2);
// result: number between 00 and 99
let amount3 = GenericRandom(3);
// result: number between 000 and 999

// 18 is the max number of digits
```

Async
```js
const numberizer = require('numberizer');

async function asyncGeneric() {
    let amount1 = await numberizer.GenericRandomAsync(1);
    // result: number between 0 and 9
    let amount2 = await numberizer.GenericRandomAsync(2);
    // result: number between 00 and 99
    let amount3 = await numberizer.GenericRandomAsync(3);
    // result: number between 000 and 999

    // 18 is the max number of digits
};

const { GenericRandomAsync } = require('numberizer');

const asyncGeneric = async () => {
    let amount1 = await GenericRandomAsync(1);
    // result: number between 0 and 9
    let amount2 = await GenericRandomAsync(2);
    // result: number between 00 and 99
    let amount3 = await GenericRandomAsync(3);
    // result: number between 000 and 999

    // 18 is the max number of digits
};
```

### Parameters: 1 => 18
If no parameters are passed, it will return a default 8 digits number.

### Passworizer Project By Emiliano Kosh
https://www.npmjs.com/package/passworizer


## Thanks
Feel free to contribute to the proyect.