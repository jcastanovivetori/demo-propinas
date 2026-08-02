function calcularPropina(cuenta, porcentaje) {
  return cuenta * porcentaje / 100;
}

function formatear(valor) {
  return valor.toLocaleString('es-CO', { maximumFractionDigits: 0 });
}

function calcular() {
  const cuenta = Number(document.getElementById('cuenta').value);
  const porcentaje = Number(document.getElementById('propina').value);
  const personas = Number(document.getElementById('personas').value);
  const total = cuenta + calcularPropina(cuenta, porcentaje);
  document.getElementById('resultado').textContent = 'Cada uno paga: $' + formatear(total / personas);
}

document.getElementById('calcular').addEventListener('click', calcular);
