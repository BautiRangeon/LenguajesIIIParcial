// Validaciones
function validarApellido(nombre) {
  return /^[a-zA-Z]+$/.test(nombre);
}

function validarNombre(nombre) {
  return /^[a-zA-Z]+$/.test(nombre);
}

function validarDNI(dni) {
  return /^\d{8}$/.test(dni);
}

function validarFechaNacimiento(fecha) {
  const anio = new Date(fecha).getFullYear();
  return anio > 2006;
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Evento de validación
document.getElementById('validarBtn').addEventListener('click', () => {
  const apellido = document.getElementById('apellido').value;
  const nombre = document.getElementById('nombre').value;
  const dni = document.getElementById('dni').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const email = document.getElementById('email').value;

  if (!validarApellido(apellido)) {
    alert("Apellido inválido. Solo letras.");
    return;
  }

  if (!validarNombre(nombre)) {
    alert("Nombre inválido. Solo letras.");
    return;
  }

  if (!validarDNI(dni)) {
    alert("DNI inválido. Deben ser 8 dígitos numéricos.");
    return;
  }

  if (!validarFechaNacimiento(fechaNacimiento)) {
    alert("Fecha de nacimiento inválida. Debe ser posterior a 2006.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Email inválido.");
    return;
  }

  alert("Todos los datos son válidos.");
});

// Preguntas
document.getElementById('preguntasBtn').addEventListener('click', () => {
  const p1 = prompt("¿Cuál es tu nacionalidad?");
  const p2 = prompt("¿Cuál es tu color favorito?");
  const p3 = prompt("¿Cuál es el nombre de tu mascota?");

  document.getElementById('respuestas').innerText = `${p1}-${p2}-${p3}`;
});


