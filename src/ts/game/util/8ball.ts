const responses: string[] = [
    "Y... Yo creo que sí.",
    "¡Es cierto!",
    "Sin lugar a dudas xd",
    "Sí.",
    "Dalo por hecho.",

    "Eh... vuelve a preguntar.",
    "Ahorita no, joven.",
    "Si te lo digo no me vas a creer.",
    "Pregunta con más fuerza.",
    "Dejame que veo mi libreta de chistes... oh.",

    "No.",
    "No... No... ¡Definitivamente No!",
    "No lo creo.",
    "Mi IA dice que no es así.",
    "No cuentes con ello."
]

export class Oball {
    ask(): string {
        let response = responses[Math.floor(Math.random() * responses.length)]
        return response
    }
} 
