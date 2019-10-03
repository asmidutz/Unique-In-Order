
function sorty(newarr){
console.log("++++  Start Sorty Function  ++++")
console.log("newarr is " + newarr)
    var i;
    var n = 1;

    for (i = 0; i < newarr.length; i++) {
        console.log("Enter for Loop")
        if (newarr.length === 1)
        {
            
            console.log ("newarr = 1 exit function")
            console.log("newarr = " + newarr)
            return false;
      
        }
        if (n > newarr.length -1){

            console.log("if n is more than the newarr length exit function")
            return newarr;
        }
        if (newarr[i] === newarr[n]) {
           console.log("Enter Duplicate found statement")
           var character1 = newarr[n]
           var character2 = newarr[i]
           var char1
           var char2
            if (character1 === character1.toUpperCase()) {
                char1 = true
                console.log("Enter check if lowercase")
            }
            else {char1 = false
            console.log("first character false")}
            if (character2 === character2.toUpperCase()){
                char2 = true
                console.log("Enter second check if lowercase")
            }
            else {char2 = false
                console.log("first character false")}

            if (char1 === char2){
            console.log("Duplicate found - splicing " + newarr[n])
            newarr.splice(n,1)
         
            
            console.log("newarr is now " + newarr)
            end = newarr.length -1
       
            almend = newarr.length -2
            console.log("newarr[end] = " + newarr[end] + " newarr[almend] = " + newarr[almend])
                if (newarr[end] === newarr[almend]) {
                    console.log("splicing duplicate found at end of newarr array, newarr before splice = " + newarr )
                    newarr.splice(end,1)
                    console.log("newarr after splice = " + newarr)
                
                    
                    
                }
                
                console.log("==== Calling Sorty function again ====")
                sorty(newarr)

            }

        
        }
        else
        {
            
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

  var str1 = "AAA"
  ///var str1 = ['A','A','A']
  var result = uniqueInOrder(str1)
  
console.log(result)



