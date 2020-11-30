let items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'phone', age: 20},
  {color: 'green', type: 'phone', age: 20}
];

let excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
];


let newItems = items.reduce((acc, item) => {
  let result = excludes.some(exclude => item[exclude['k']] === exclude['v']);
  if (!result) {
    acc.push(item);
  }
  return acc;
}, []);

// alternative solution with filter, which is more readable

let _newItems = items.filter(item => 
  !excludes.some(exclude => item[exclude['k']] === exclude['v'])
);

console.log(newItems);
console.log(_newItems);
