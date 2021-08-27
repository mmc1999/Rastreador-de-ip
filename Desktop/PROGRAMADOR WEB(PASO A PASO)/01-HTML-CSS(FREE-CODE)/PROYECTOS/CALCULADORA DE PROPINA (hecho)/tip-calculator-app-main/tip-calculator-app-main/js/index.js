const $botonReset = document.querySelector(".botonReset"),
    $propinaPersona = document.querySelector(".propPersona"),
    $totalCuentaPersona = document.querySelector(".totalPersona"),
    $botonPropina = document.querySelectorAll(".botonPropina"),
    $inputCuenta = document.querySelectorAll("input");

let valorIngresadoMasPropina = 0,
    precioPorPersona = 0,
    propinaPorPersona = 0;

document.addEventListener("click", (e) => {

    let valorIngresado = parseFloat(document.querySelector(".inputCuenta").value),
        elegirPropina = document.querySelector(".inputElegirPropina").value,
        inputCuentaPersona = parseFloat(document.querySelector(".inputCuentaPersona").value);   

    if (e.target.classList.contains("botonPropina5")) valorIngresadoMasPropina = valorIngresado * 1.05;
    if (e.target.classList.contains("botonPropina10")) valorIngresadoMasPropina = valorIngresado * 1.10;
    if (e.target.classList.contains("botonPropina15")) valorIngresadoMasPropina = valorIngresado * 1.15;
    if (e.target.classList.contains("botonPropina25")) valorIngresadoMasPropina = valorIngresado * 1.25;
    if (e.target.classList.contains("botonPropina50")) valorIngresadoMasPropina = valorIngresado * 1.50;
    if (e.target.classList.contains("inputElegirPropina")) valorIngresadoMasPropina = (valorIngresado * parseFloat(`1.${elegirPropina}`));
    

    propinaPorPersona = (valorIngresadoMasPropina - valorIngresado) / inputCuentaPersona;
    
    precioPorPersona = valorIngresadoMasPropina / inputCuentaPersona; //TOTAL POR PERSONA
    if(isNaN(precioPorPersona) || isNaN(propinaPorPersona)) {
        $propinaPersona.textContent = `$ ${0}`;
        $totalCuentaPersona.textContent = `$ ${0}`;
    }else {
        $propinaPersona.textContent = `$ ${propinaPorPersona.toFixed(2)}`;
        $totalCuentaPersona.textContent = `$ ${precioPorPersona.toFixed(2)}`;
    }

    if(e.target.matches(".botonReset")) {
        $propinaPersona.textContent = `$ ${0}`;
        $totalCuentaPersona.textContent = `$ ${0}`;
    }

});









/*document.addEventListener("click", (e) => {
    let valorIngresado = parseFloat(document.querySelector(".inputCuenta").value) || 0,
        elegirPropina = document.querySelector(".inputElegirPropina").value || 0,
        inputCuentaPersona = parseFloat(document.querySelector(".inputCuentaPersona").value) || 0;

    if (e.target.classList.contains("botonPropina5")) return  valorIngresadoMasPropina = valorIngresado * 1.05;
    if (e.target.classList.contains("botonPropina10")) return valorIngresadoMasPropina = valorIngresado * 1.10;
    if (e.target.classList.contains("botonPropina15")) return valorIngresadoMasPropina = valorIngresado * 1.15;
    if (e.target.classList.contains("botonPropina25")) return valorIngresadoMasPropina = valorIngresado * 1.25;
    if (e.target.classList.contains("botonPropina50")) return valorIngresadoMasPropina = valorIngresado * 1.50;
    if (e.target.classList.contains("inputElegirPropina")) return valorIngresadoMasPropina = (valorIngresado * parseFloat(`1.${elegirPropina}`));


    precioPorPersona = valorIngresadoMasPropina / inputCuentaPersona; //TOTAL POR PERSONA
    propinaPorPersona = (valorIngresadoMasPropina - valorIngresado) / inputCuentaPersona;

    $propinaPersona.textContent = `$ ${propinaPorPersona.toFixed(2)}`;
    $totalCuentaPersona.textContent = `$ ${precioPorPersona.toFixed(2)}`;
    
    if(typeof $propinaPersona.textContent == "number" || typeof $totalCuentaPersona.textContent == "number") {
        $propinaPersona.textContent = 0;
        $totalCuentaPersona.textContent = 0;
    }
    console.log(valorIngresado, inputCuentaPersona)
});
*/

