const result = document.getElementById("result");
const loader = document.getElementById("loader");

const btn = document.getElementById("calculateBtn");
btn.addEventListener("click", function () {
  const birthDate = document.getElementById("birthDate").value;
  result.textContent = "";

  if (!birthDate) {
    alert("Por favor, selecciona tu fecha de nacimiento.");
    return;
  }

  const horasVividas = calcularHorasVividas(new Date(birthDate));
  loader.style.display = "grid";

  setTimeout(() => {
    result.textContent = `¡Has vivido aproximadamente ${horasVividas.toLocaleString()} horas! 🎉`;
    loader.style.display = "none";
  }, 1500);
});

function calcularHorasVividas(fechaNacimiento) {
  const hoy = new Date(); // Fecha actual
  const diferencia = hoy.getTime() - fechaNacimiento.getTime(); // Diferencia en milisegundos
  const horas = diferencia / (1000 * 60 * 60); // Convierte a horas
  return Math.floor(horas); // Redondea hacia abajo
}
