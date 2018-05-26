function show(no)
{
    var i;
    for(i=1;i<=no;i++)
        {
            if((i%3==0)&&(i%5==0))
                {
                    document.write("FizzBizz");

                }
                else if(i%3==0)
                    {
                        document.write("Fizz");
                    }
                    else if(i%5==0)
                        {
                            document.write("Bizz");
                        }
                        else
                        {
                            document.write(i);
                        }
                    }
}