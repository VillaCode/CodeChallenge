function sumSquareDigits(n: number): number{
    
    var res = 0;
    
    while (n != 0){
        var temp = n % 10;
        res += temp * temp;
        n = Math.floor(n/10);
    }
    return res;
}

function isHappy(n: number): boolean {
    
    var fast: number = n;
    var slow: number = n;
    
    do{
        fast = sumSquareDigits(sumSquareDigits(fast));
        console.log(fast);
        
        slow = sumSquareDigits(slow);
        console.log(slow);
    } while( fast != slow );
    
    return (fast == 1);
    
};