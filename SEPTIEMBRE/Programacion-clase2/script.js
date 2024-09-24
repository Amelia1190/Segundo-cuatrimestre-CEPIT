/*function obtenerDatos(url) {
    return new Promise((resolve, reject) => {
      // Simulamos una petición a una API
      setTimeout(() => {
        const datos = { nombre: "Juan", edad: 30 };
        if (datos) {
          resolve(datos);
        } else {
          reject(new Error("No se encontraron datos"));
        }
      }, 2000);
    });
  }
  
  obtenerDatos('https://mi-api.com')
    .then(datos => {
      console.log(datos); // Imprime los datos si la promesa se resuelve
    })
    .catch(error => {
      console.error(error); // Maneja el error si la promesa se rechaza
    });*/

    // Función para obtener los usuarios de una API (simulada)
function obtenerUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarios = [
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'María' },
        { id: 3, nombre: 'Pedro' }
      ];
      if (usuarios) {
        resolve(usuarios);
      } else {
        reject(new Error('No se pudieron obtener los usuarios'));
      }
    }, 20000);
  });
}

// Función para mostrar los usuarios en la página
function mostrarUsuarios(usuarios) {
  const lista = document.getElementById('usuarios');
  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = usuario.nombre;
    lista.appendChild(li);
  });
}

// Llamamos a la función obtenerUsuarios y manejamos la promesa
obtenerUsuarios()
  .then(usuarios => {
    mostrarUsuarios(usuarios);
  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  });