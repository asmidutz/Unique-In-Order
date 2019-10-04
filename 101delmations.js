function howManyDalmations(numDogs){
  
  var dogs = ['Hardly any', 'More than a handful!', 'Woah that\'s a lot of dogs!', '101 DALMATIONS!!!'];
  
  
var response  
if (numDogs <= 10) {response = dogs[0]}
else if (numDogs <= 50) {response = dogs[1]}
else if (numDogs <= 101) {response = dogs[3]}
else {response = dogs[2]}
  
return response

}

test = howManyDalmations(24)
console.log(test)