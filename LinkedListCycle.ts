
 //Definition for singly-linked list.
 class ListNode1 {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}
 



 function hasCycle(head: ListNode | null): boolean {
    
    if (!head || head.next == undefined){
        return false;
    }
    
    var fastNode: any = head;
    var slowNode: ListNode = head;
    
    while(fastNode){
       
        if(!fastNode.next){
            return false;
        }else{
            
            fastNode = fastNode.next.next;
            slowNode = slowNode.next!;
            
            if(fastNode == slowNode){
                return true;
            };   
        }; 
        
    };
    return false;
};
