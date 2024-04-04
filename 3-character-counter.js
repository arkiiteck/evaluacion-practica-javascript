text=prompt("Ingresa el texto a validar")
char=prompt("Ingresa el caracter que quieres encontrar")
counter=0
for (letter in text){
    if(text[letter]==char){
        counter++
    }
}
console.log(`el carácter “${char}” se repite ${counter} veces en "${text}"`)