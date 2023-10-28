let arr = [1, 2, 4, [[5, 6, [7, 8]]]];

//----flaten arr----
function flt(a) {
    let result = [];
    a.forEach((item) => {
        if (Array.isArray(item)) {
            result.push(...flt(item))
        } else {
            result.push(item)
        }
    })
    return result;
}
console.log(flt(arr));

//flaten arr using reduce fn
function fltRdc(arr) {
    return arr.reduce((res, item) => res.concat(Array.isArray(item) ? fltRdc(item) : item), [])
}
console.log(fltRdc(arr))

//---obj and arr both 
function fltObj(arr) {
    let res = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res.push(...flt(item))
        } else if (typeof item === 'object') {
            res.push(Number(Object.values(item).join('')))
        } else {
            res.push(item)
        }
    })
    return res
}

console.log(fltObj([1, 2, { '3': 3 }, [4, 5], 6]))


//single digit array
const ar = [8, 22222, 333, 99999];

function singleDigit(num) {
    let n = 0;
    while (num > 0) {
        let rem = num % 10;
        n += rem;
        num = Math.floor(num / 10)
    }
    return n;
}

function convertSingleDigitArr(a) {
    const r = []
    a.forEach((x) => {
        if (x.toString().length > 1) {
            let res = singleDigit(x);
            if (res.toString().length > 1) {
                r.push(singleDigit(res))
            } else {
                r.push(res)
            }
        } else {
            r.push(x)
        }
    });
    return r;
};

console.log(convertSingleDigitArr(ar))

function isPrime(n) {
    let count = 0;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 0) {
        console.log(n + " is PrimeNo")
    }
}


for (let i = 1; i <= 20; i++) {
    isPrime(i)
}

function chenchFn(arr, size) {
    let sm = [];

    for (let ele of arr) {
        let last = sm[sm.length - 1];

        if (!last || last.length === size) {
            console.log(ele)
            sm.push([ele])
        } else {
            last.push(ele)
        }
    }
    return sm;
}

console.log(chenchFn([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function fn(arr, size) {
    let sm = [];

    for (let i = 0; i < arr.length; i++) {
        let last = sm[sm.length - 1];

        if (!last || last.length === size) {
            sm.push([arr[i]])
        } else {
            last.push(arr[i])
        }
    }
    return sm
}

console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))