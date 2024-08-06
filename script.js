// Función para encriptar texto
function encriptarTexto() {
  const textoEntrada = document.getElementById('texto-entrada').value;
  const textoEncriptado = textoEntrada.replace(/([a-z])/g, (match) => {
    const codigoAscii = match.charCodeAt(0);
    const nuevoCodigoAscii = (codigoAscii - 97 + 3) % 26 + 97;
    return String.fromCharCode(nuevoCodigoAscii);
    
  });
  document.getElementById('texto-salida').value = textoEncriptado;
  document.getElementById('texto-entrada').value="";
  document.getElementById('Encriptar').disabled = false;
}

// Función para desencriptar texto
function desencriptarTexto() {
  const textoEntrada = document.getElementById('texto-entrada').value;
  const textoDesencriptado = textoEntrada.replace(/([a-z])/g, (match) => {
    const codigoAscii = match.charCodeAt(0);
    const nuevoCodigoAscii = (codigoAscii - 97 - 3 + 26) % 26 + 97;
    return String.fromCharCode(nuevoCodigoAscii);
  });
  document.getElementById('texto-salida').value = textoDesencriptado;
  document.getElementById('texto-entrada').value="";
}

// Función para copiar texto
document.getElementById('copiar').addEventListener('click', () => {
  const textoSalida = document.getElementById('texto-salida').value;
  navigator.clipboard.writeText(textoSalida).then(() => {
    console.log('Texto copiado al portapapeles');
    
  });
});

document.getElementById('pegar').addEventListener('click', () => {
  navigator.clipboard.readText().then((texto) => {
    document.getElementById('texto-entrada').value = texto;
    document.getElementById('texto-salida').value="";
  });
});