

function fourNumbers(num1, num2, num3, num4) {

    let arrayOfNumbers = [...arguments] // Spread Operator para crear un array de los argumentos que va recibir la función

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) { //isNaN(numero), Si retorna false, significa que es un número
        return "Debe ingresar un número"
    }
    
    function checkNumberCapicua(number) { //Creo una función el cual va a chequear si un numero es capicúa

        let checking = Number(number.toString().split('').reverse().join("")) // Convierto un numero a string, transformo cada dígito en un array y lo doy vuelta ('reverse'). Finalmente los uno nuevamente. Toda esta operación me devuelve un string, por eso lo convierto a Number al principio.

        if (number === checking && number > 10) { return number } // Si el numero que ingresó, es igual al número dado vuelta, significa que es capicua. El && operator es porque los números menores de 10 no son capicuas.
    }

    let capicueArray = arrayOfNumbers.filter(eachNumber => checkNumberCapicua(eachNumber)).sort((a,b) => a - b); //Creo una variable el cual va a almacenar un array de numeros capicuas. Uso la función filter el cual chequea que la funcion checkNumberCapicua devuelva un numero. En caso que devuelva, lo guarda en el array. Finalmente los ordeno de la misma forma que hice en el desafío anterior.

    console.log("Array de números palíndromas ordenados de menor a mayor: ", capicueArray)
    
    // No implemente que considere numeros negativos como capicua. Ya que tecnicamente no se si se consideran capicuas los números negativos. Porque, en teoría, un número capicua se lee igual de izquierda a derecha y de derecha a izquierda. En caso que el número sea menor a 0, no se cumpliría esa condición.

    // No valido la cantidad de números ya que es un programa que podría recibir más de 4 argumentos y determinar cuales son capicuas y cuales no.
}

console.log(fourNumbers(343,522,212,101))

/* Retorna:
Array de números palíndromas ordenados de menor a mayor:  [ 101, 212, 343 ]
*/
