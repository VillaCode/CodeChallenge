function isValid(s: string): boolean {
    
    var text = s.split("");
    
    if(text.length % 2 != 0 || text[0] == ")" || text[0] == "]" || text[0] == "}"){       
        return false
    };
        
    var stack: string[] = [];
    stack.push(text[0])

    for(let i = 1; i < text.length; i++){

        if( (stack[stack.length-1] === "(" && text[i] === ")") || 
            (stack[stack.length-1] === "{" && text[i] === "}") || 
            (stack[stack.length-1] === "[" && text[i] === "]") ){
           
            stack.pop();

        }else{
            stack.push(text[i]);
        };
    };

    return stack.length === 0;
    
};