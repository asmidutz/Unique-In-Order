function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  

function splitnum(number){
    output = [],
    sNumber = number.toString();
   
    
    for (var i = 0, len = sNumber.length; i < len; i++) {
    output.push(+sNumber.charAt(i)); 
    }
    return output
}

function strong(n){
    var test = splitnum(n)
    var total = 0
    for (var i = 0, len = test.length; i < len; i++){
        x = i - 1
        var fact = factorial(test[i])
        fact = parseInt(fact)
        total = total + fact
        }   
    if (total == n ){ return "STRONG!!!!"} else {return "Not Strong !!"}
}

answer = strong(145)

console.log(answer)
