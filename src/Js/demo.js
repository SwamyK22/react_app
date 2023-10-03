const arr1 = [
    {
        name:'shiva',
        id:1,
    },
    {
        name:'simon',
        id:2,
    },
    {
        name:'swamy',
        id:3,
    },
]
const arr2 = [
    {
        name:'shiva',
        id:1,
    },
    {
        name:'swamy',
        id:3,
    },
]

const combine = [...arr1, ...arr2];
const ids = arr2.map(x => x.id)

const ans = arr1.filter((x) => !ids.includes(x.id))
console.log(ans);

const res = combine.reduce((p,c) => {
    // const val = p[c] ? null : p[c];
    console.log(c);
    console.log(p);
    return [...p,c ]
},[]);

console.log(res);