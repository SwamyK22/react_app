const ar = [2, 1, 2, 9, 3, 4, 8];
console.log(Math.min(...ar));
// console.log(ar.findIndex((x) => x));

// ----count even numbers in array---------------
// const ans = ar.reduce((x, y) => {
//     y % 2 === 0 ? x++ : x;
//     return x
// }, 0)
// console.log(ans);

//---find max value---
// const dif = ar.reduce((p, c) => {
//     c > p ? p = c : p
//     return p
// }, 0);
// console.log(dif);

// //max differance 
// const diff = (ar) => {
//     const min = Math.min(...ar)
//     const max = Math.max(...ar)
//     return max-min
// } 
// console.log(diff(ar));
// const a = [1, 2, 13, 2, 1, 13]
// console.log(a.filter((x,i) => x !== 13 && a[i-1] !== 13));


// function sum67(nums) {
//     const f = nums.findIndex((x) => x === 6);
//     console.log(f);
//   const l = nums.reverse().findIndex((x) => x === 7);
//   const last = nums.length - l - 1
//   const remove = nums.slice(f,last+1)
//   console.log(remove);
// }
// sum67([1, 6, 2, 2, 7, 1, 6, 99, 99, 7])

// const arr = [2,6,7,7,4,6,7,1,2,3]
// const res = arr.reduce((p,c) => {
//     if(!p.includes(c)) return [...p,c]
//     return p
// },[]);