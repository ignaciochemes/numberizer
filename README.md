# Numberizer ![Build Status](https://travis-ci.org/mrhooray/rpg.png?branch=master)

Generate controlled random numbers with this package quickly and safely. Allowing you to assign the length of numbers you want to generate.
Convert integers to binary by passing the number as a parameter.

## Installation
> npm install numberizer

## Usage

#### Generic Random Sync
```js
const numberizer = require('numberizer');

let amount1 = numberizer.GenericRandom(1);
// result: number between 0 and 9
let amount2 = numberizer.GenericRandom(2);
// result: number between 00 and 99
let amount3 = numberizer.GenericRandom(3);
// result: number between 000 and 999

// 18 is the max number of digits

const { GenericRandom } = require('numberizer');

let amount1 = GenericRandom(1);
// result: number between 0 and 9
let amount2 = GenericRandom(2);
// result: number between 00 and 99
let amount3 = GenericRandom(3);
// result: number between 000 and 999

// 18 is the max number of digits
```

#### Generic Random Async
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

---
#### Number to Binary Sync
```js
const numberizer = require('numberizer');

let numberToBinary = numberizer.NumberToBinary(123);
// result: 00000000000000000000000001111011

let numberToBinarySplit = numberizer.NumberToBinary(123, true);
// result: 00000000 00000000 00000000 01111011
```

```js
const { NumberToBinary } = require('numberizer');

let numberToBinary = NumberToBinary(123);
// result: 00000000000000000000000001111011

let numberToBinarySplit = NumberToBinary(123, true);
// result: 00000000 00000000 00000000 01111011
```

#### Number to Binary Async
```js
const numberizer = require('numberizer');

async function numberToBinary() {
    let numberToBinary = await numberizer.NumberToBinary(123);
    // result: 00000000000000000000000001111011
    
    let numberToBinarySplit = await numberizer.NumberToBinary(123, true);
    // result: 00000000 00000000 00000000 01111011
}

```

```js
const { NumberToBinary } = require('numberizer');

const numberToBinary = async () => {
    let numberToBinary = await NumberToBinary(123);
    // result: 00000000000000000000000001111011
    
    let numberToBinarySplit = await NumberToBinary(123, true);
    // result: 00000000 00000000 00000000 01111011
}

```

### Passworizer Project By Emiliano Kosh
https://www.npmjs.com/package/passworizer


## Thanks
Feel free to contribute to the proyect.