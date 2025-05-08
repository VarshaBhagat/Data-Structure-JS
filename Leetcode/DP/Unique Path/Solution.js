/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    function factorial(m){
        let c=1
        while(m>0){
    
            c*=m
            m--
        }
        return c
    }
    return Math.round(factorial(m+n-2)/(factorial(m-1)*factorial(n-1)))
};