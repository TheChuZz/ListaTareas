// Esta es una función de flecha anónima autoejecutable.
// Se utiliza para encapsular el código y evitar la contaminación del ámbito global.
(() => {
  // Seleccionar el botón del formulario utilizando un atributo de datos.
  const btn = document.querySelector("[data-form-btn]");

  // Función para crear una nueva tarea.
  const createTask = (evento) => {
    // Evitar que el formulario se envíe y la página se recargue.
    evento.preventDefault();

    // Seleccionar el campo de entrada de texto del formulario utilizando un atributo de datos.
    const input = document.querySelector("[data-form-input]");
    // Obtener el valor ingresado en el campo de entrada de texto.
    const valor = input.value;

    // Seleccionar la lista de tareas utilizando un atributo de datos.
    const list = document.querySelector("[data-list]");
    // Crear un nuevo elemento <li> para representar la tarea.
    const task = document.createElement("li");

    // Limpiar el campo de entrada de texto estableciendo su valor en vacío.
    input.value = "";

    // Imprimir el valor de la tarea en la consola.
    console.log(valor);

    // Crear el contenido HTML para la tarea utilizando el valor ingresado.
    const content = `<div><input type="checkbox"><span>${valor}</span></div>`;
    // Establecer el contenido HTML creado en el elemento <li> de la tarea.
    task.innerHTML = content;

    // Agregar el elemento <li> de la tarea a la lista de tareas.
    list.appendChild(task);

    // Agregar el ícono de eliminar a la tarea.
    task.appendChild(deleteIcon());
  };

  // Agregar un evento de clic al botón del formulario para crear una nueva tarea.
  btn.addEventListener("click", createTask);

  // Función para crear el ícono de eliminar.
  const deleteIcon = () => {
    // Crear un elemento <i> para representar el ícono.
    const i = document.createElement("i");
    // Agregar una clase CSS al elemento <i> para estilizarlo.
    i.classList.add("lista__eliminar");
    // Agregar un evento de clic al ícono para eliminar la tarea.
    i.addEventListener("click", deleteTask);
    // Devolver el elemento <i> creado.
    return i;
  };

  // Función para eliminar la tarea.
  const deleteTask = (event) => {
    // Obtener el elemento padre del ícono (es decir, el elemento <li> de la tarea).
    const parent = event.target.parentElement;
    // Eliminar el elemento <li> de la tarea de su elemento padre.
    parent.remove();
  };

  const name = ruben;
})();

