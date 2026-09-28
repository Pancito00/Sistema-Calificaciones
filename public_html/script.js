// Matriz donde se guardarán todos los alumnos
let alumnos = [];


function agregarAlumno() {

    let nombre = document.getElementById("nombre").value.trim();

    let edad = parseInt(
        document.getElementById("edad").value
    );

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar nombre y edad
    if (nombre === "" || isNaN(edad) || edad <= 0) {

        document.getElementById("resultado").innerHTML =
            "Por favor, escribe correctamente el nombre y la edad.";

        return;
    }


    // Guardar las calificaciones en una matriz
    let calificaciones = [
        calificacion1,
        calificacion2,
        calificacion3,
        calificacion4
    ];


    // Validar que todas las calificaciones existan
    // y estén entre 0 y 10
    for (let i = 0; i < calificaciones.length; i++) {

        if (
            isNaN(calificaciones[i]) ||
            calificaciones[i] < 0 ||
            calificaciones[i] > 10
        ) {

            document.getElementById("resultado").innerHTML =
                "Las calificaciones deben estar entre 0 y 10.";

            return;
        }
    }


    // Calcular promedio
    let suma = 0;

    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }

    let promedio = suma / calificaciones.length;


    // Determinar mensaje
    let mensaje = "";

    if (promedio >= 9 && promedio <= 10) {

        mensaje = "EXCELENTE";

    } else if (promedio >= 8 && promedio < 9) {

        mensaje = "MUY BIEN";

    } else if (promedio >= 7 && promedio < 8) {

        mensaje = "BIEN";

    } else if (promedio >= 6.5 && promedio < 7) {

        mensaje = "PIENSA EN CONTABILIDAD";

    } else if (promedio >= 6 && promedio < 6.5) {

        mensaje = "DATE DE BAJA";

    } else {

        mensaje = "VETE A TURISMO";
    }


    // Crear la matriz del alumno
    let alumno = [
        nombre,
        edad,
        calificaciones,
        promedio,
        mensaje
    ];


    // Agregar alumno a la matriz principal
    alumnos.push(alumno);


    mostrarAlumnos();

    // Limpiar solamente los campos para poder capturar
    // otro alumno
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";
}


// Mostrar todos los alumnos registrados
function mostrarAlumnos() {

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<h2>Alumnos registrados</h2>";


    for (let i = 0; i < alumnos.length; i++) {

        let alumno = alumnos[i];

        resultado.innerHTML +=
            "<div class='alumno'>" +

            "<strong>Alumno:</strong> " + alumno[0] +
            "<br>" +

            "<strong>Edad:</strong> " + alumno[1] +
            "<br>" +

            "<strong>Calificación 1:</strong> " + alumno[2][0] +
            "<br>" +

            "<strong>Calificación 2:</strong> " + alumno[2][1] +
            "<br>" +

            "<strong>Calificación 3:</strong> " + alumno[2][2] +
            "<br>" +

            "<strong>Calificación 4:</strong> " + alumno[2][3] +
            "<br>" +

            "<strong>Promedio:</strong> " +
            alumno[3].toFixed(2) +

            "<br><br>" +

            "<strong>Resultado:</strong> " +
            alumno[4] +

            "</div>";
    }
}

function validarRango(input) {
    let valor = parseFloat(input.value);

    if (valor > 10) {
        input.value = 10; // Si pasa de 10, lo fija en 10
    } else if (valor < 0) {
        input.value = 0;  // Si es menor a 0, lo fija en 0
    }
}


// Borrar absolutamente todo
function limpiarTodo() {

    alumnos = [];

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";

    document.getElementById("resultado").innerHTML = "";
}