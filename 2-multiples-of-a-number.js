// Craete a variable to save the number
userNumber=NaN
// Check if tne number is an integer
while(isNaN(userNumber)==true || userNumber%1!=0){
    userNumber=prompt("Ingresa un número entero: ")
    console.log(`Ingresaste: ${userNumber}`)
    parseFloat(userNumber)
    if(isNaN(userNumber)==true || userNumber%1!=0){
        console.log("Valor no válido. Ingresa un Número entero")
    }
}
// Create a variable to save the result of the multiplication
result=0
// Create a variable to save the multiples
multiples=`Los múltiplos de ${userNumber} son: `
// Create a loop to do Math operations and save the results on a variable
for(x=1;x<101;x++){
    result=userNumber*x
    if(x<100){
        multiples=multiples+result+", "
    }
    else{
        multiples=multiples+result
    }
}
// Print the multiples
console.log(multiples)