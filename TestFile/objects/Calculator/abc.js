var reduce = function(nums, fn, init) {
    val = fn(init, nums[0]);
    val = fn(val, nums[1]);
    val = fn(val, nums[2]);
    val = fn(val, nums[3]);
return val;
};
nums = [1,2,3,4];
fn = function sum(accum, curr) 
{
     return accum + curr; 
}
init = 0;
const reduced = reduce(nums,fn,init);
console.log(reduced);