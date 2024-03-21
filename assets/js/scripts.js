let factorial ="";
let multiplicacion = "";

function calcular() {
  
  let numero = parseInt(document.getElementById("numero").value);
  if( numero > 0 && numero <= 20 ){
  for (let i = 1; i <= numero; i++) {
    multiplicacion += (`${i} x ${numero} = ${i*numero} <br>`);
    console.log(`${i} x ${numero} = ${i*numero}`);
  }
  for (let i = 1; i <= numero; i++) {
    var res = 1;
    for (t = 1; t <= i; t++) {
      res *= t;
    }
    factorial += `-El factorial de ${i} es ${res} <br>`;
    console.log(`-El factorial de ${i} es ${res}`);
    resultado.innerHTML = multiplicacion;
    resultadoFactorial.innerHTML = factorial;
    reiniciar.innerHTML = `<a href="index.html">Reiniciar</a>`;
  }
  
}else {
  alert("Número fuera del rango")

}
}


