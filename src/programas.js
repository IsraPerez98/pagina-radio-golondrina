const programas = {
    "El Charro": {
        descripcion : "programa fome xd",
        colores : ["#1b5e20", "#003300"],
    },
    "Marcelita": {
        descripcion : "programa fome xd",
        colores : ["#ad1457", "#78002e"],
    },
    "Programacion Regular": {
        descripcion : "nada",
        colores : ["#43a047", "#00701a"],
    }
}

const horario = {
    "Lunes": [
        {
            programa: "El Charro",
            
            hora_inicio: "7:00",
            hora_termino: "10:00",
        },
        {
            programa: "El Charro",
            
            hora_inicio: "12:00",
            hora_termino: "19:00",
        },
        {
            programa: "Marcelita",

            hora_inicio: "20:00",
            hora_termino: "22:00",
        }, 
        {
            programa: "Marcelita",

            hora_inicio: "22:00",
            hora_termino: "24:00",
        },
        {
            programa: "Marcelita",

            hora_inicio: "20:00",
            hora_termino: "22:00",
        }
    ],
    "Jueves": [
        {
            programa: "Marcelita",

            hora_inicio: "00:00",
            hora_termino: "12:00",
        }
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