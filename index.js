const result = document.getElementById("result");
const loader = document.getElementById("loader");
const btn = document.getElementById("calculateBtn");

btn.addEventListener("click", function () {
  result.textContent = "";
  const birthDate = document.getElementById("birthDate").value;

  if (!birthDate) {
    alert("Por favor, selecciona tu fecha de nacimiento.");
    return;
  }
  loader.style.display = "grid";
  const horasAprox = vividasOPorVivir(birthDate); // Esta constante guarda el texto que retorna vividasOPorVivir
  setTimeout(() => {
    result.textContent = horasAprox;
    loader.style.display = "none";
  }, 1500);
});

function calcularHoras(fechaNacimiento) {
  const hoy = new Date(); // Fecha actual
  const diferencia = hoy.getTime() - fechaNacimiento.getTime(); // Diferencia en milisegundos
  const horas = diferencia / (1000 * 60 * 60); // Convierte a horas
  return Math.floor(horas); // Redondea hacia abajo
}

function vividasOPorVivir(birthDate) {
  const horasVividas = calcularHoras(new Date(birthDate));
  let hourAbsolute = Math.abs(horasVividas);
  if (horasVividas < 0) {
    return `¡Te quedan ${hourAbsolute.toLocaleString()} horas para llegar a ese día! 🎉`;
  } else {
    return `¡Desde esa fecha has vivido aproximadamente ${hourAbsolute.toLocaleString()} horas! 🎉`;
  }
}
