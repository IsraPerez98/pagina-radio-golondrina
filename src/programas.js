const programas = {
    /*
    "Matinal Paine Se Renueva": {
        descripcion : "Programa orientado a informar a la comunidad Painina de las últimas noticias locales, nacionales e internacionales, ademas de entretener y motivar las mañanas de los auditores, conducido por Rodrigo Contreras, Concejal",
        colores : ["#880e4f", "#560027"],
        color_texto: ["#ffffff"],
    },
    "La Radio Enseña" : {
        descripcion: "",
        colores: ["#c51162","#8e0038"],
        color_texto: ["#ffffff"],
    },
    */
    "La Mañana Cristalina" : {
        descripcion: "Programa misceláneo informativo, cultural y musical conducido por Marcela Berrios.",
        colores: ["#ff8f00", "#c56000"],
        color_texto: ["#000000"],
    },
    "Musica de los 80's" : {
        descripcion: "Solo éxitos de los 80s.",
        colores: ["#1a237e","#000051"],
        color_texto: ["#ffffff"],
    },
    "El Cantar de Nuestra Tierra" : {
        descripcion: "Nuestras raíces y tradiciones expresadas a través de música folclórica.",
        colores: ["#6d4c41", "#40241a"],
        color_texto: ["#ffffff"],
    },
    "La Fiesta del Charro" : {
        descripcion: "Programa de entretención interactivo de cumbias y rancheras conducido por el Charro Incognito.",
        colores: ["#64dd17", "#1faa00"],
        color_texto: ["#000000"],
    },
    "Long Play de los Recuerdos" : {
        descripcion: "Exitos del ayer de la década de los 50s 60s 70s y 80s conducido por Marcela Berrios.",
        colores: ["#00796b", "#004c40"],
        color_texto: ["#ffffff"],
    },
    "A 120 Por Hora" : {
        descripcion: "Programa de entretención interactivo con música diversa conducido por DJ Chamorro.",
        colores: ["#2e7d32","#005005"],
        color_texto: ["#ffffff"],
    },
    /*
    "Salud Paine" : {
        descripcion: "",
        colores: ["#29b6f6","#0086c3"],
        color_texto: ["#000000"],
    },
    "Con Peras y Manzanas" : {
        descripcion: "",
        colores: ["#c62828","#8e0000"],
        color_texto: ["#ffffff"],
    },
    "Juntos Cuidemos Paine" : {
        descripcion: "",
        colores: ["#00838f","#005662"],
        color_texto: ["#ffffff"],
    },
    "Pasadito las 12" : {
        descripcion: "",
        colores: ["#00796b","#004c40"],
        color_texto: ["#ffffff"],
    },
    */
    "El Bailable de la 106.1" : {
        descripcion: "Programa interactivo con música bailable para acompañar tu fin de semana, conducido por DJ Chamorro.",
        colores: ["#00796b","#004c40"],
        color_texto: ["#ffffff"],
    },
    "Golondrina en Domingo" : {
        descripcion: "Programa interactivo musical e informativo conducido por DJ Chamorro. ",
        colores: ["#b71c1c","#7f0000"],
        color_texto: ["#ffffff"],
    },
    "Psicologia" : {
        descripcion: "",
        colores: ["#00796b","#004c40"],
    },
    "Programacion Regular" : {
        descripcion: "Música variada para entretenerte las 24 horas del día.",
        colores: ["#01579b","#002f6c"],
        color_texto: ["#ffffff"],
    },
    "Golondrina 80s" : {
        descripcion: "Solo éxitos de los años 80s",
        colores: ["#3f51b5","#2196f3"],
        color_texto: ["#ffffff"],
    },
}

const horario = {
    "Lunes": [
        /*
        {
            programa: "Matinal Paine Se Renueva",

            hora_inicio: "7:30",
            hora_termino: "9:30",
        },
        {
            programa: "La Radio Enseña",

            hora_inicio: "10:00",
            hora_termino: "10:30",
        },
        */
        {
            programa: "La Mañana Cristalina",

            hora_inicio: "10:40",
            hora_termino: "13:00",
        },
        {
            programa: "Musica de los 80's",

            hora_inicio: "13:00",
            hora_termino: "13:30",
        },
        {
            programa: "El Cantar de Nuestra Tierra",

            hora_inicio: "13:30",
            hora_termino: "14:00",
        },
        {
            programa: "La Fiesta del Charro",

            hora_inicio: "14:00",
            hora_termino: "17:00",
        },
        {
            programa: "Long Play de los Recuerdos",

            hora_inicio: "18:00",
            hora_termino: "20:00",
        },
        {
            programa: "A 120 Por Hora",

            hora_inicio: "21:00",
            hora_termino: "23:30",
        }

    ],
    "Martes": [
        /*
        {
            programa: "Matinal Paine Se Renueva",

            hora_inicio: "8:30",
            hora_termino: "10:00",
        },
        {
            programa: "La Radio Enseña",

            hora_inicio: "10:00",
            hora_termino: "10:30",
        },
        */
        {
            programa: "La Mañana Cristalina",

            hora_inicio: "10:40",
            hora_termino: "12:00",
        },
        /*
        {
            programa: "Con Peras y Manzanas",

            hora_inicio: "12:00",
            hora_termino: "13:00",
        },
        */
        {
            programa: "Musica de los 80's",

            hora_inicio: "13:00",
            hora_termino: "13:30",
        },
        {
            programa: "El Cantar de Nuestra Tierra",

            hora_inicio: "13:30",
            hora_termino: "14:00",
        },
        {
            programa: "La Fiesta del Charro",

            hora_inicio: "14:00",
            hora_termino: "17:00",
        },
        {
            programa: "Long Play de los Recuerdos",

            hora_inicio: "18:00",
            hora_termino: "19:00",
        },
        /*
        {
            programa: "Juntos Cuidemos Paine",

            hora_inicio: "19:00",
            hora_termino: "20:00",
        },
        */
        {
            programa: "A 120 Por Hora",

            hora_inicio: "21:00",
            hora_termino: "23:30",
        }
    ],
    "Miercoles": [
        /*
        {
            programa: "Matinal Paine Se Renueva",

            hora_inicio: "8:30",
            hora_termino: "10:00",
        },
        {
            programa: "La Radio Enseña",

            hora_inicio: "10:00",
            hora_termino: "10:30",
        },
        */
        {
            programa: "La Mañana Cristalina",

            hora_inicio: "10:40",
            hora_termino: "12:30",
        },
        /*
        {
            programa: "Pasadito las 12",

            hora_inicio: "12:30",
            hora_termino: "13:30",
        },
        */
        {
            programa: "El Cantar de Nuestra Tierra",

            hora_inicio: "13:30",
            hora_termino: "14:00",
        },
        {
            programa: "La Fiesta del Charro",

            hora_inicio: "14:00",
            hora_termino: "17:00",
        },
        {
            programa: "Long Play de los Recuerdos",

            hora_inicio: "18:00",
            hora_termino: "20:00",
        },
        {
            programa: "A 120 Por Hora",

            hora_inicio: "21:00",
            hora_termino: "23:30",
        }
    ],
    "Jueves": [
        /*
        {
            programa: "Matinal Paine Se Renueva",

            hora_inicio: "8:30",
            hora_termino: "10:00",
        },
        {
            programa: "La Radio Enseña",

            hora_inicio: "10:00",
            hora_termino: "10:30",
        },
        */
        {
            programa: "La Mañana Cristalina",

            hora_inicio: "10:40",
            hora_termino: "13:00",
        },
        {
            programa: "Musica de los 80's",

            hora_inicio: "13:00",
            hora_termino: "13:30",
        },
        {
            programa: "El Cantar de Nuestra Tierra",

            hora_inicio: "13:30",
            hora_termino: "14:00",
        },
        {
            programa: "La Fiesta del Charro",

            hora_inicio: "14:00",
            hora_termino: "17:00",
        },
        {
            programa: "Long Play de los Recuerdos",

            hora_inicio: "18:00",
            hora_termino: "20:00",
        },
        /*
        {
            programa: "Salud Paine",

            hora_inicio: "18:30",
            hora_termino: "19:00",
        },
        */
        {
            programa: "A 120 Por Hora",

            hora_inicio: "21:00",
            hora_termino: "23:30",
        }
    ],
    "Viernes": [
        /*
        {
            programa: "Matinal Paine Se Renueva",

            hora_inicio: "8:30",
            hora_termino: "10:00",
        },
        {
            programa: "La Radio Enseña",

            hora_inicio: "10:00",
            hora_termino: "10:30",
        },
        */
        {
            programa: "La Mañana Cristalina",

            hora_inicio: "10:40",
            hora_termino: "12:00",
        },
        /*
        {
            programa: "Psicologia",

            hora_inicio: "12:00",
            hora_termino: "13:00",
        },
        */
        {
            programa: "Musica de los 80's",

            hora_inicio: "13:00",
            hora_termino: "13:30",
        },
        {
            programa: "El Cantar de Nuestra Tierra",

            hora_inicio: "13:30",
            hora_termino: "14:00",
        },
        {
            programa: "La Fiesta del Charro",

            hora_inicio: "14:00",
            hora_termino: "17:00",
        },
        {
            programa: "Long Play de los Recuerdos",

            hora_inicio: "18:00",
            hora_termino: "20:00",
        },
        {
            programa: "El Bailable de la 106.1",

            hora_inicio: "21:30",
            hora_termino: "24:00",
        }
    ],
    "Sabado": [
        /*
        {
            programa: "Juntos Cuidemos Paine",

            hora_inicio: "11:30",
            hora_termino: "12:30",
        },
        */
        {
            programa: "El Bailable de la 106.1",

            hora_inicio: "21:30",
            hora_termino: "24:00",
        },
    ],
    "Domingo": [
        {
            programa: "Golondrina en Domingo",

            hora_inicio: "11:00",
            hora_termino: "13:30",
        },
    ]
}


const dias_semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
]

function horaAMinutos(hora,minutos) {
    return hora * 60 + minutos;
}

function horaStringAMinutos(hora) {
    const hora_separada = hora.split(":");
    
    const horas = parseInt(hora_separada[0]);
    const minutos = parseInt(hora_separada[1]);

    return horaAMinutos(horas,minutos);
}


function getProgramaActual() {
    const fecha = new Date();

    const dia = dias_semana[fecha.getDay()];
    const hora_actual = fecha.getHours();
    const minuto_actual = fecha.getMinutes();
    const hora_completa_actual = horaAMinutos(hora_actual, minuto_actual);

    const dia_horario = horario[dia];

    for(let i in dia_horario) {
        const bloque_programa = dia_horario[i];

        const hora_completa_inicio = horaStringAMinutos(bloque_programa.hora_inicio);
        const hora_completa_termino = horaStringAMinutos(bloque_programa.hora_termino);

        if( hora_completa_inicio < hora_completa_actual && hora_completa_termino > hora_completa_actual ) {
            //console.log(bloque_programa.programa);
            return {
                bloque_programa: bloque_programa,
                programa: programas[bloque_programa.programa],
                minutos_restantes: hora_completa_termino - hora_completa_actual,
            }
        }
    }

    return {
        bloque_programa: {
            programa: "Programacion Regular",
        
            hora_inicio: "0:00",

            hora_termino: "0:00",
        },
        programa: programas["Programacion Regular"],
        minutos_restantes: 5,
    }
}

function getHorario() {
    return horario;
}

function getProgramas() {
    return programas;
}

const exports = {
    getProgramaActual,
    getHorario,
    getProgramas,
    horaStringAMinutos,
}

export default exports;