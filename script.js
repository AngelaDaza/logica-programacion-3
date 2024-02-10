const factorial = document.querySelector("#factorial");
const boton = document.querySelector("#btn");
const mostrarResultado = document.querySelector("#resultado span");
boton.addEventListener("click", function(){
    const leerFactorial = Number(factorial.value);
    let resultado = 1;
    for(let i = 1; i <= leerFactorial; i++){
        resultado *= i;
    }
    mostrarResultado.textContent = resultado;
});
