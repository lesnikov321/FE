// Написать функцию, которая принимает 1 параметр. 
// При первом вызове, она его запоминает, при втором — суммирует переданный параметр с тем, что передали первый раз и тд. 
// Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28



(function () {
    function sum (num) {
        let temp = num;
        sum = function() {
            let arg = arguments[0] ? arguments[0] : 0;
            return temp = temp + arg;
        };
        return sum();
    }
    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(20));
})();

