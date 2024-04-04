for(x=0;x<5;x++){
    randomNumber=Math.round(Math.random()*100)
    message=`numeroGenerado = ${randomNumber} `
    console.log(randomNumber%2==0?message+"// el número es par":message+"// el número es impar")
}