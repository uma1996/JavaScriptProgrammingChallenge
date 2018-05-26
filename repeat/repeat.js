var arr=[];
var res=[];
for(var i=0;i<10;i++)
    {
        arr.push(prompt("Enter a number"));
    }
    for(var i=0;i<arr.length;i++)
        {
            for(var j=i+1;j<arr.length;j++)
                {
                    if(arr[i]==arr[j])
                        {
                            res.push(arr[i]);

                        }
                }
        }
        for(var i=0;i<res.length;i++)
            {
                document.write(res[i]+" ");
            }