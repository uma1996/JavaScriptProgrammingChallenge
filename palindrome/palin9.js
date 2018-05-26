function computePalindrome(word)
{ 
    document.getElementById("inp1").value ="";
         if(word.split("").reverse().join("")==word)
                    {
                        document.getElementById('outputlabel').innerHTML = word;
                    } 
                
  
}