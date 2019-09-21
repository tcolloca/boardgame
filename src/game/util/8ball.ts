const responses: string[] = [
  'Y... Yo creo que sí.',
  '¡Es cierto!',
  'Sin lugar a dudas xd',
  'Sí.',
  'Dalo por hecho.',

  'Eh... vuelve a preguntar.',
  'Ahorita no, joven.',
  'Si te lo digo no me vas a creer.',
  'Pregunta con más fuerza.',
  'Dejame que veo mi libreta de chistes... oh.',

  'No.',
  'No... No... ¡Definitivamente No!',
  'No lo creo.',
  'Mi IA dice que no es así.',
  'No cuentes con ello.',
];

/**
 *8ball class but with an "O" instead "8"
 */
export class Oball {
  /**
   * Select random answer
   *
   * @param {string} question The question en cuestión
   * @return {string} A random response, or "No hiciste una pregunta" if there
   *                   is no question
   */
  ask(question: string): string {
    if (!question) return 'No hiciste una pregunta';
    else {
      const response = responses[Math.floor(Math.random() * responses.length)];
      return response;
    }
  }
}
