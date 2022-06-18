function majorityElement(nums: number[]): number {
    
    var mayor = nums[0];
    var counter = 1;
    
    for(let i = 1; i < nums.length; i++){
        if(counter == 0){
            mayor = nums[i];
            counter++;
        }else if(nums[i] == mayor){
            counter++;
        }
        else{
            counter--;
        }
    }
    
    return mayor;
};