
function sorty(newarr){
    var i;
    var n = 1;

    for (i = 0; i < newarr.length; i++) {
        if (newarr.length === 1)
        {

            return newarr;
            return false;
      
        }
        if (n > newarr.length -1){

            return newarr;
        }
        if (newarr[i] === newarr[n]) {
           var character1 = newarr[n]
           var character2 = newarr[i]
           var char1
           var char2
           
         
           if (isNaN(character1) && isNaN(character2))
           {
           if (character1 === character1.toUpperCase()) {
                char1 = true

            }
            else {char1 = false

        }
            if (character2 === character2.toUpperCase()){
                char2 = true
            }
            else {char2 = false
            }
        }
        char1 = character1
        char2 = character2
            if (char1 === char2){
            newarr.splice(n,1)
         
            
            end = newarr.length -1
       
            almend = newarr.length -2
                if (newarr[end] === newarr[almend]) {
                    newarr.splice(end,1)
                }
                sorty(newarr)
            }
        }

        n++
    }
    return newarr
}
function uniqueInOrder(iterable){
        
   if (Array.isArray(iterable))
   {
    
     var test = sorty(iterable)
 
     return test
   }
    else
    {
      var newarr = iterable.split("");
      var test = sorty(newarr)
   
      
     return test
    }  
  }


//Test cases


var str1 = "AAABBbCCG13324"
var result = uniqueInOrder(str1)
console.log(result)
console.log("Same letter multiple times test")



