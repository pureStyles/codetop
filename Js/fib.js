var fib = function(n) {
    const fn = [];
    fn[0] = 0;
    fn[1] = 1;
    if (n <= 1) {
        return fn[n];
    }
    for (let i = 2; i <= n; i++) {
        fn[i] = (fn[i - 1] % 1000000007) + (fn[i-2] % 1000000007);
    }
    return fn[n] % 1000000007;
}
