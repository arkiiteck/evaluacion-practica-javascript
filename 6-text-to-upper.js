// Create a variable to save initial text
console.log("Esta aplicación transforma todos los textos a mayusculas hasta que encuentra un punto")
initialText=prompt('Ingresa una cadena de texto: ')
// Create a variable to save final text
finalText=""
// Create a boolean to check if initialText had a point
pointChecker=false;
// Create a for loop to save each letter of initialText on finalText
for(letter in initialText){
    // Create an instruction to transform each letter to upper case until find a point on initialText
    pointChecker==false?finalText=`${finalText}${initialText[letter].toUpperCase()}`:finalText=`${finalText}${initialText[letter]}`
    // Create an if conditional who check if the current character is a point
    if(initialText[letter]=="."){
        pointChecker=true;
    } 
}
// Print initial text and final text
console.log(`Entrada: ${initialText}`)
console.log(`Salida: ${finalText}`)