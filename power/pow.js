function nearestPow2()
{
var n,i=1,res=1,count=0;
n=document.getElementById("number").value;
while(res<=n)
    {
        var res=Math.pow(2,i);
        i++;
        count++;
    }
    count=count-1;
    document.getElementById("result").value=count;
}