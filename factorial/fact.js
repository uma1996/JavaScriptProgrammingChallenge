function show()
{
    var i,n,fact=1;
    n=parseInt(document.getElementById("number").value);
    for(i=1;i<=n;i++)
        {
            fact=fact*i;
        }
    
        document.getElementById("result").value=fact;
 }
    
