## QUES 6


find() : Always returns an array of documents.
 finds multiple matches, the array contains all of them
 f it finds no matches, it returns an empty array: []


findOne() : Always returns a single document object (or null).
It stops searching as soon as it finds the first document that matches your query
If it finds no matches, it returns null


## QUES 7

const _ = require('lodash');

const array = [1, 2, 3, 4, 5];

const hasValue = _.includes(array, 3);

console.log(hasValue);
// Output: true


## 8

const _ = require('lodash');

const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
];

const urange = _.find(users,u=>{(u.age>21)&&(u.age<26>)})



## 9

const numbers = [1, 2, 3, 2, 4, 1];

const result = _.uniq(_.map(numbers, n => n * n));
_.map() transforms [1, 2, 3, 2, 4, 1] into [1, 4, 9, 4, 16, 1].
_.uniq() takes that result and removes the duplicate 1 and 4