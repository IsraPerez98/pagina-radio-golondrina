const programas = {
    "El Charro": {
        descripcion : "programa fome xd",
        colores : ["#FFFFFF", "#000000"],
    },
    "Marcelita": {
        descripcion : "programa fome xd",
        colores : ["#FFFFFF", "#000000"],
    },
}

const horario = {
    "Lunes": [
        {
            programa: "El Charro",
            
            hora_inicio: 12,
            minuto_inicio: 0,

            hora_termino: 19,
            minuto_termino: 0,
        },
        {
            programa: "Marcelita",

            hora_inicio: 20,
            minuto_inicio: 0,

            hora_termino: 22,
            minuto_termino: 0,
        }
    ],
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


function programaActual() {
    const fecha = new Date();

    const dia = dias_semana[fecha.getDay()];
    const hora_actual = fecha.getHours();
    const minuto_actual = fecha.getMinutes();
    const hora_completa_actual = hora_actual * 60 + minuto_actual;

    const dia_horario = horario[dia];

    for(let i in dia_horario) {
        const bloque_programa = dia_horario[i];

        const hora_completa_inicio = bloque_programa.hora_inicio * 60 + bloque_programa.minuto_inicio;
        const hora_completa_termino = bloque_programa.hora_termino * 60 + bloque_programa.minuto_termino;

        if( hora_completa_inicio < hora_completa_actual && hora_completa_termino > hora_completa_actual ) {
            //console.log(bloque_programa.programa);
            return {
                bloque_programa: bloque_programa,
                programa: programas[bloque_programa.programa],
            }
        }
    }
}


const exports = {
    programaActual,
}

export default exports;