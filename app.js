function calcularPropina(cuenta, porcentaje) {
  return cuenta * porcentaje / 100;
}

function formatear(valor) {
  return valor.toLocaleString('es-CO', { maximumFractionDigits: 0 });
}

function calcular() {
  const cuenta = Number(document.getElementById('cuenta').value);
  const porcentaje = Number(document.getElementById('propina').value);
  const total = cuenta + calcularPropina(cuenta, porcentaje);
  document.getElementById('resultado').textContent = 'Total con propina: $' + formatear(total);
}

document.getElementById('calcular').addEventListener('click', calcular);
