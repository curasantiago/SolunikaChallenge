
function threeNumbers(num1, num2, num3) {

    if ([...arguments].length > 3) {
        return "Debe ingresar solamente 3 números."
    } //Valido que solo sean 3 números. Si son mas, no serviria este programa ya que accedo a cada posición del array ordenado para determinar cual es el número mas chico, el del medio y el más grande.

    let sortedArray = [...arguments].sort((a,b) => a - b) // Uso Spread Operator para crear un array de los argumentos que recibe la función. Utilizo el metodo Sort el cual ordena un array, y le paso una función dentro el cual sirve para utilizarlo con números.

    console.log('El número mas chico es: ', sortedArray[0])
    console.log('El número del medio es: ', sortedArray[1])
    console.log('El número mas grande es: ', sortedArray[2])

}

console.log(threeNumbers(101, 150, 0))

/* retorna: 
El número mas chico es:  0
El número del medio es:  101
El número mas grande es:  150
*/