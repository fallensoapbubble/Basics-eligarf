const url = "https://jsonplaceholder.typicode.com/users/1/todos";


//see first.js

const res = await fetch(url)

const data = await res.json()

//a
console.log(data.filter((x)=>x.completed===true))


//b
// data.map((item)=>item.id=90)
const newTodos = data.map(({ completed, ...rest }) => ({ ...rest, done: completed }));
/*
Destructuring { completed, ...rest }

This pulls the completed property out into a variable named completed.

...rest collects the remaining properties (userId, id, title) into an object called rest.

Return value ({ ...rest, done: completed })

We spread rest into a new object (so we keep userId, id, title).

We then add done: completed, which creates the new done property with the same value as completed.

Because we did not include completed when spreading rest, the resulting object has no completed property—only done
*/
console.log(newTodos);

