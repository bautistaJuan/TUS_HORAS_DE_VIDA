const btn = document.getElementById("calculateBtn");
btn.addEventListener("click", function () {
  const birthDate = document.getElementById("birthDate").value;

  if (!birthDate) {
    alert("Por favor, selecciona tu fecha de nacimiento.");
    return;
  }

  const horasVividas = calcularHorasVividas(new Date(birthDate));
  const result = document.getElementById("result");
  result.textContent = `¡Has vivido aproximadamente ${horasVividas.toLocaleString()} horas! 🎉`;
});

function calcularHorasVividas(fechaNacimiento) {
  const hoy = new Date(); // Fecha actual
  const diferencia = hoy.getTime() - fechaNacimiento.getTime(); // Diferencia en milisegundos
  const horas = diferencia / (1000 * 60 * 60); // Convertir a horas
  return Math.floor(horas); // Redondear hacia abajo
}
