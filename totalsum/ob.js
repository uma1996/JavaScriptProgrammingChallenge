function object()
{
    var x=document.getElementById("demo").value;
    var y=JSON.parse(x);
    var sum=0;
    for(i in y)
        {
            sum+=y[i];

        }
        document.getElementById("output").value=sum;
}