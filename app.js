let listaAmigos = [];  // Aquí se almacenarán los nombres

// Función para ingresar el nombre de un amigo
function ingresoNombreDeUsuario() {
    const nombreUsuarioIngresado = document.getElementById('amigo').value.trim();

    // Validar si el campo está vacío
    if (nombreUsuarioIngresado === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que el nombre solo contenga letras
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloLetras.test(nombreUsuarioIngresado)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Normalizamos para evitar duplicados con diferentes mayúsculas/minúsculas
    const nombreNormalizado = nombreUsuarioIngresado.toLowerCase();

    if (listaAmigos.some(amigo => amigo.toLowerCase() === nombreNormalizado)) {
        alert(`El nombre "${nombreUsuarioIngresado}" ya está en la lista.`);
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombreUsuarioIngresado);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = "";

    // Actualizar la lista visible
    actualizarLista();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
    const listaElementos = document.getElementById('listaAmigos');
    listaElementos.innerHTML = ""; // Limpiar lista existente

    // Iterar sobre el arreglo y agregar los nombres
    for (const amigo of listaAmigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElementos.appendChild(li);
    }
}

// Función para sortear un amigo y limpiar la lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista. ¡Añade algunos nombres primero!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>¡Tu amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;

    // Limpiar la lista de amigos después de sortear
    listaAmigos = [];  // Vaciar el array de amigos

    // Limpiar la lista visible en el DOM
    actualizarLista();
}
