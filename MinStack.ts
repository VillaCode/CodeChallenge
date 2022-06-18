class Node1{

    valor: number;
    next: Node1;
    min: number;

    constructor(valor: number, next: any, min: number){
        this.valor = valor;
        this.next = next;
        this.min = min;
    };
};


class MinStack {


stack: Node1;


push(x: number): void {
    if(this.stack == undefined){
        this.stack = new Node1(x, null, x);
    }else{
        this.stack = new Node1(x, this.stack, Math.min(x, this.stack.min))
}
        
};


pop(): void {
    this.stack = this.stack.next;
}

top(): number {
    return this.stack.valor;
}

getMin(): number {
    return this.stack.min;
}

};