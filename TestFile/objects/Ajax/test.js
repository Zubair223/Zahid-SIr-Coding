let sum = [1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0];

let count=0;
let max=0;
let flag =0;
for(let i = 0; i < sum.length; i++)
{
    
    if(sum[i] == 1)
    {
        count++;
    }
    
    else
    {
        flag =1;
    }
    if(flag == 1 || i == sum.length-1)
    {
        flag++;
        if(max < count)
        {
            max = count;
        }    
        count =0;
    
    }
    

}
console.log(max);