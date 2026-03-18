function fib(n: number): number {
    let a = 0, b = 1
    for (let i = 0; i < n; i++) {
        let r = a + b
        a = b
        b = r 
    }
    return b
}

// 1 1 2 3 5

fib(10)

console.time('fib')
console.log(fib(5))
console.timeEnd('fib')