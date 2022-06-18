//algoritmo de erathos
//multiplicas todos los numeros de n[1] hasta length
//aumentas y repites
//los sobrantes son primos

function countPrimes(n: number): number {
    
    var isPrime = new Array();
    var counter = 0;
    
    for(let i = 2; i < n; i++){         
        
        if(isPrime[i] != false){
            counter++;
            for(let j = i; j < n; j++){  

                if((j*i) <= n){
                    isPrime[j*i] = false; 
                }else{
                    break;
                };

        };
        
        
        };
    };
    
    return counter;
};