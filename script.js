function mostrarMensaje() {
  document.getElementById("resultado").textContent = "¡Hola! Este mensaje fue generado por JavaScript.";
}

function saludar() {
  const nombre = document.getElementById("nombre").value;
  
  if (nombre.trim() === "") {
    document.getElementById("saludo").textContent = "Por favor, ingresa tu nombre.";
  } else {
    document.getElementById("saludo").textContent = `¡Hola, ${nombre}! Bienvenido al mundo de JavaScript.`;
  }
}
