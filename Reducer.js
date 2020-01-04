let maxCallback = (acc, cur) => Math.max(acc.x, cur.x)
let maxCallback2 = (max, cur) => Math.max(max, cur)

// reduce() without initialValue
console.log([{ x: 22 }, { x: 42 }].reduce(maxCallback)) // 42
// [{ x: 22 }].reduce(maxCallback) // { x: 22 }


//map/reduce; better solution, also works for empty or larger arrays
[{ x: 22 }, { x: 42 }].map(element => element.x).reduce(maxCallback2, -Infinity)