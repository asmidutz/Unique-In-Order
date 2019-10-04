function FirstReverse(str) { 

    var splitStr = str.split("");
    console.log(splitStr + " Split")
    var revArr = splitStr.reverse();
    console.log(revArr + " Reverse")
    var joinArr = revArr.join("");
    console.log(joinArr + " Join")
    return joinArr; 
           
  }

  FirstReverse("hello world")