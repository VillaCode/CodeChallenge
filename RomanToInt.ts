const romanMap = new Map<string, number>([
    ["M", 1000], 
    ["CM",900],
    ["D",500],
    ["CD",400],
    ["C",100],
    ["XC", 90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1]
]);

function romanToInt(s: string): number {
var result = 0;
    
var romanSingle = s.split("");

for(let i = 0; i < romanSingle.length; i++){   

    if(romanMap.has(romanSingle[i]+romanSingle[i+1])){
        result = result + romanMap.get(romanSingle[i]+romanSingle[i+1])!;
        i++;
    }else{  
        result = result + romanMap.get(romanSingle[i])!;
    };
         
};

return result;
};