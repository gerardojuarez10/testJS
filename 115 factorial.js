function factorial(num){
    var fact = 1;
 for(var i=1; i<=num;i++){
    fact= fact*i ;
 }
 return fact;
}

function factorialR(num){
    if(num == 1){
        return 1
    } else{
        return num * factorialR(num-1)
    }
 
 }

console.log(factorialR(15));