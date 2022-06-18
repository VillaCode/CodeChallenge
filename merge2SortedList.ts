
  // Definition for singly-linked list.
   class ListNode {
       val: number
       next: ListNode | null
       constructor(val: any, next?: ListNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.next = (next===undefined ? null : next)
       }
   }
 

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    if(!list1){
        return list2;
    }else if(!list2){
        return list1;
    }
    
    var listRHead: ListNode = new ListNode(null, null);
    var current: ListNode = listRHead;

    
    while(list1 || list2){  
        
        while(current.next){
            current = current.next;
        }
        
        
        if(list2 != undefined && (list1 == undefined || list2.val <= list1.val)){
            current.next = new ListNode(list2.val, null);
            current = current.next;
            list2 = list2.next;
        }

        if(list1 != undefined && (list2 == undefined || list2.val >= list1.val)){
            current.next = new ListNode(list1.val, null);
            current = current.next;
            list1 = list1.next;
        }
          
    }
    
    return listRHead.next;
};